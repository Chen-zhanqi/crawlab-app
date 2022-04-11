# -*- coding: utf-8 -*-
import re

import scrapy

from CCCF_Spider.items import CccfSpiderItem
from crawlab import save_item


class CccfSpider(scrapy.Spider):
    name = 'cccf'
    allowed_domains = ['cccf.com.cn']
    start_urls = ['http://httpbin.org/ip']

    url = "http://lxxx.cccf.com.cn/lableFind.jsp?"
    par = "isFirst=isNotFirst&start=0&curPageNum=null&queryValue=1&recordFactoryId=&lableCode={lableCode}&queryCount=&ipAddr="

    def __init__(self, start_code=None, end_code=None, *args, **kwargs):
        super(CccfSpider, self).__init__(*args, **kwargs)
        self.start_code = start_code
        self.end_code = int(end_code)


    def parse(self, response):
        print(response.text)
        url = self.url + self.par.format(lableCode="35882AA00000AA")
        yield scrapy.Request(
            url=url,
            callback=self.get_cccf_info,
        )

    def get_cccf_info(self, response):
        current_url = response.url
        content = response.text
        # print(content)

        # 标志明码
        lableCode = re.search(r'name="lableCode" value="(.*?)"', content, re.S).group(1)
        code = re.search(r'AA(\d+)AA', lableCode).group(1)

        # 产品生产信息
        produce_factory = re.search(r"产品生产信息</td>.*?生产厂家.*?value='(.*?)'", content, re.S).group(1)
        produce_file_number = re.search(r"产品生产信息</td>.*?产品档案号.*?value='(.*?)'", content, re.S).group(1)
        product_name = re.search(r"产品生产信息</td>.*?产品名称.*?value='(.*?)'", content, re.S).group(1)
        product_type = re.search(r"产品生产信息</td>.*?规格型号.*?value='(.*?)'", content, re.S).group(1)
        produce_flow_address = re.search(r"产品生产信息</td>.*?流向地区.*?value='(.*?)'", content, re.S).group(1)
        produce_flow_unit = re.search(r"产品生产信息</td>.*?流向单位.*?value='(.*?)'", content, re.S).group(1)
        produce_form_type = re.search(r"产品生产信息</td>.*?表单类型.*?value='(.*?)'", content, re.S).group(1)
        produce_serial_number = re.search(r"产品生产信息</td>.*?产品批号.*?value='(.*?)'", content, re.S).group(1)
        produce_time = re.search(r"产品生产信息</td>.*?生产时间.*?value='(.*?)'", content, re.S).group(1)
        produce_quality_inspector = re.search(r"产品生产信息</td>.*?质检员.*?value='(.*?)'", content, re.S).group(1)

        # 产品流向信息
        flow_name = re.search(r"产品流向信息</td>.*?产品名称.*?value='(.*?)'", content, re.S)
        if flow_name:
            flow_name = flow_name.group(1)
        else:
            flow_name = ''

        flow_dealer = re.search(r"产品流向信息</td>.*?经销商信息.*?value='(.*?)'", content, re.S)
        if flow_dealer:
            flow_dealer = flow_dealer.group(1)
        else:
            flow_dealer = ''

        flow_sales_category = re.search(r"产品流向信息</td>.*?销售类别.*?value='(.*?)'", content, re.S)
        if flow_sales_category:
            flow_sales_category = flow_sales_category.group(1)
        else:
            flow_sales_category = ''

        flow_end_time = re.search(r"产品流向信息</td>.*?到达日期.*?value='(.*?)'", content, re.S)
        if flow_end_time:
            flow_end_time = flow_end_time.group(1)
        else:
            flow_end_time = ''

        flow_flow_address = re.search(r"产品流向信息</td>.*?流向地区.*?value='(.*?)'", content, re.S)
        if flow_flow_address:
            flow_flow_address = flow_flow_address.group(1)
        else:
            flow_flow_address = ''

        flow_factory = re.search(r"产品流向信息</td>.*?生产厂家.*?value='(.*?)'", content, re.S)
        if flow_factory:
            flow_factory = flow_factory.group(1)
        else:
            flow_factory = ''

        try:
            current_lableCode = re.search(r'AA(\d+)AA', current_url).group(1)
            current_code = int(current_lableCode)
            next_code = str(int(current_lableCode) + 1)
            # print(current_code, next_code)
            if len(next_code) == 1:
                next_code = "0000" + next_code
            elif len(next_code) == 2:
                next_code = "000" + next_code
            elif len(next_code) == 3:
                next_code = "00" + next_code
            elif len(next_code) == 4:
                next_code = "0" + next_code

            next_lableCode = "35881" + "AA" + next_code + "AA"
            next_url = self.url + self.par.format(lableCode=next_lableCode)
        except Exception as e:
            print(e)

        else:
            if current_code < self.end_code:
                # print(current_url)
                # print(next_url)
                yield scrapy.Request(
                    url=next_url,
                    callback=self.get_cccf_info,
                )
            else:
                print("达到限制最高页")
                pass

        finally:
            item = CccfSpiderItem()
            item['lable_code'] = lableCode
            item['code'] = code
            item['produce_factory'] = produce_factory
            item['produce_file_number'] = produce_file_number
            item['product_name'] = product_name
            item['product_type'] = product_type
            item['produce_flow_address'] = produce_flow_address
            item['produce_flow_unit'] = produce_flow_unit
            item['produce_form_type'] = produce_form_type
            item['produce_serial_number'] = produce_serial_number
            item['produce_time'] = produce_time
            item['produce_quality_inspector'] = produce_quality_inspector
            item['flow_name'] = flow_name
            item['flow_dealer'] = flow_dealer
            item['flow_sales_category'] = flow_sales_category
            item['flow_end_time'] = flow_end_time
            item['flow_flow_address'] = flow_flow_address
            item['flow_factory'] = flow_factory
            print(dict(item))
            save_item(item)
            yield item

