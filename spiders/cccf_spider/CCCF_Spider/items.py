# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class CccfSpiderItem(scrapy.Item):
    # define the fields for your item here like:
    lable_code = scrapy.Field()
    code = scrapy.Field()

    produce_factory = scrapy.Field()
    produce_file_number = scrapy.Field()
    product_name = scrapy.Field()
    product_type = scrapy.Field()
    produce_flow_address = scrapy.Field()
    produce_flow_unit = scrapy.Field()
    produce_form_type = scrapy.Field()
    produce_serial_number = scrapy.Field()
    produce_time = scrapy.Field()
    produce_quality_inspector = scrapy.Field()

    flow_name = scrapy.Field()
    flow_dealer = scrapy.Field()
    flow_sales_category = scrapy.Field()
    flow_end_time = scrapy.Field()
    flow_flow_address = scrapy.Field()
    flow_factory = scrapy.Field()

    task_id = scrapy.Field()
