/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '嘿嘿秀秀，我又来给你发消息了嘞',
    desc: `
      **{{date.DATA}}**
      今天是我们恋爱的第{{love_day.DATA}}天
      
      所在的城市：{{city.DATA}}
      
      今日天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      风向: {{wind_direction.DATA}}

      风级: {{wind_scale.DATA}}
      
      每日一句(英文版)：{{note_en.DATA}}
      
      每日一句(中文版)：{{note_ch.DATA}}
      
      再来一句情话吧hiahia:{{earthy_love_words.DATA}}
      
      今日你的星座运势：
      
      爱情运势：{{love_horoscope.DATA}}
      
      事业学业：{{career_horoscope.DATA}}
      
      财富运势：{{wealth_horoscope.DATA}}
      
      健康运势：{{healthy_horoscope.DATA}}
      
      综合运势：{{comprehensive_horoscope.DATA}}
      `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
