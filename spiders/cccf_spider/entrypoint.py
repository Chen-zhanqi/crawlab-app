#!/usr/bin/env python
# -*- coding:utf-8 -*-
"""
@file: entrypoint.py
@time: 2020/12/10 11:22
@desc: None
@Author: Chenzq
@Wechat: 15690833097
@contact: czq181020@gmail.com
"""
from scrapy.cmdline import execute

execute(["scrapy", "crawl", "cccf"])
