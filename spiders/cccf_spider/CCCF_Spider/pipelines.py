# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
import pymysql


class CccfSpiderPipeline(object):
    def __init__(self, host, database, user, password, port):
        self.host = host
        self.database = database
        self.user = user
        self.password = password
        self.port = port

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            host=crawler.settings.get('MYSQL_HOST'),
            database=crawler.settings.get('MYSQL_DATABASE'),
            user=crawler.settings.get('MYSQL_USER'),
            password=crawler.settings.get('MYSQL_PASSWORD'),
            port=crawler.settings.get('MYSQL_PORT'),
        )

    def open_spider(self, spider):
        self.db = pymysql.connect(host=self.host, user=self.user, password=self.password, database=self.database, charset='utf8', port=self.port)
        self.cursor = self.db.cursor()

    def close_spider(self, spider):
        # self.db.commit()
        self.cursor.close()
        self.db.close()

    def process_item(self, item, spider):
        data = dict(item)
        print(data)
        # data['imgs'] = data['image_paths'][0]
        # del data['image_paths']

        lableCode = data.get('lableCode')
        check_sql = "SELECT lableCode FROM datas_cccf WHERE lableCode={}".format(repr(str(lableCode)))
        count = self.cursor.execute(check_sql)
        if count:
            kvs = ", ".join(list(map(lambda k: k + "=%s", list(data.keys()))))
            value = tuple([v for v in data.values()])
            update_house = "UPDATE %s SET %s WHERE lableCode=%s" % ("datas_cccf", kvs, repr(str(lableCode)))

            try:
                self.cursor.execute(update_house, value)
            except Exception as e:
                print(e)
                self.db.rollback()
            else:
                self.db.commit()
                print("*" * 20, "{} {} 更新完成".format(lableCode, data.get('product_name')))

        else:
            keys = ', '.join(data.keys())
            values = ', '.join(['%s'] * len(data))
            value = tuple([v for v in data.values()])

            sql = 'INSERT INTO %s (%s) VALUES (%s)' % ('datas_cccf', keys, values)
            try:
                self.cursor.execute(sql, value)
            except Exception as e:
                print(e)
                self.db.rollback()
            else:
                self.db.commit()
                print("#" * 20, "{} {} 储存成功".format(lableCode, data.get('product_name')))

        return item
