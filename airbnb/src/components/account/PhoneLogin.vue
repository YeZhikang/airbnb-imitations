<template>
    <div class="main-block" style="overflow-x: auto">
        <div class="mt20" @click="handleBack()"><svg viewBox="0 0 12 12" role="img" aria-label=" " focusable="false" style="height: 16px; width: 16px; display: block; fill: currentcolor;"><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" fill-rule="evenodd"></path></svg></div>
        <h2 class="normal-font mt30">手机动态密码登陆</h2>
        <p class="mt10 light-font">未注册的手机号验证后将自动创建新账号</p>
        <div class="mt20 fxal fxbt">
            <select v-model='userInformation.area' @focus="handleFocus('select')" @blur="handleBlur('select')" class="select-country" id="hiddenCountryCodeSelect" ><option label="刚果 (+242)" value="242CG">刚果 (+242)</option><option label="刚果民主共和国 (+243)" value="243CD">刚果民主共和国 (+243)</option><option label="中国香港 (+852)" value="852HK">中国香港 (+852)</option><option label="科索沃 (+383)" value="383XK">科索沃 (+383)</option><option label="中国澳门 (+853)" value="853MO">中国澳门 (+853)</option><option label="北马其顿 (+389)" value="389MK">北马其顿 (+389)</option><option label="台湾地区 (+886)" value="886TW">台湾地区 (+886)</option><option label="阿尔巴尼亚 (+355)" value="355AL">阿尔巴尼亚 (+355)</option><option label="阿尔及利亚 (+213)" value="213DZ">阿尔及利亚 (+213)</option><option label="阿富汗 (+93)" value="93AF">阿富汗 (+93)</option><option label="阿根廷 (+54)" value="54AR">阿根廷 (+54)</option><option label="阿拉伯联合酋长国 (+971)" value="971AE">阿拉伯联合酋长国 (+971)</option><option label="阿鲁巴 (+297)" value="297AW">阿鲁巴 (+297)</option><option label="阿曼 (+968)" value="968OM">阿曼 (+968)</option><option label="阿塞拜疆 (+994)" value="994AZ">阿塞拜疆 (+994)</option><option label="埃及 (+20)" value="20EG">埃及 (+20)</option><option label="埃塞俄比亚 (+251)" value="251ET">埃塞俄比亚 (+251)</option><option label="爱尔兰 (+353)" value="353IE">爱尔兰 (+353)</option><option label="爱沙尼亚 (+372)" value="372EE">爱沙尼亚 (+372)</option><option label="安道尔 (+376)" value="376AD">安道尔 (+376)</option><option label="安哥拉 (+244)" value="244AO">安哥拉 (+244)</option><option label="安圭拉 (+1)" value="1AI">安圭拉 (+1)</option><option label="安提瓜和巴布达 (+1)" value="1AG">安提瓜和巴布达 (+1)</option><option label="奥地利 (+43)" value="43AT">奥地利 (+43)</option><option label="奥兰群岛 (+358)" value="358AX">奥兰群岛 (+358)</option><option label="澳大利亚 (+61)" value="61AU">澳大利亚 (+61)</option><option label="巴巴多斯 (+1)" value="1BB">巴巴多斯 (+1)</option><option label="巴布亚新几内亚 (+675)" value="675PG">巴布亚新几内亚 (+675)</option><option label="巴哈马 (+1)" value="1BS">巴哈马 (+1)</option><option label="巴基斯坦 (+92)" value="92PK">巴基斯坦 (+92)</option><option label="巴拉圭 (+595)" value="595PY">巴拉圭 (+595)</option><option label="巴勒斯坦领土 (+970)" value="970PS">巴勒斯坦领土 (+970)</option><option label="巴林 (+973)" value="973BH">巴林 (+973)</option><option label="巴拿马 (+507)" value="507PA">巴拿马 (+507)</option><option label="巴西 (+55)" value="55BR">巴西 (+55)</option><option label="白俄罗斯 (+375)" value="375BY">白俄罗斯 (+375)</option><option label="百慕大 (+1)" value="1BM">百慕大 (+1)</option><option label="保加利亚 (+359)" value="359BG">保加利亚 (+359)</option><option label="北马里亚纳群岛 (+1)" value="1MP">北马里亚纳群岛 (+1)</option><option label="贝宁 (+229)" value="229BJ">贝宁 (+229)</option><option label="比利时 (+32)" value="32BE">比利时 (+32)</option><option label="冰岛 (+354)" value="354IS">冰岛 (+354)</option><option label="波多黎各 (+1)" value="1PR">波多黎各 (+1)</option><option label="波兰 (+48)" value="48PL">波兰 (+48)</option><option label="波斯尼亚和黑塞哥维那 (+387)" value="387BA">波斯尼亚和黑塞哥维那 (+387)</option><option label="玻利维亚 (+591)" value="591BO">玻利维亚 (+591)</option><option label="伯利兹 (+501)" value="501BZ">伯利兹 (+501)</option><option label="博茨瓦纳 (+267)" value="267BW">博茨瓦纳 (+267)</option><option label="不丹 (+975)" value="975BT">不丹 (+975)</option><option label="布基纳法索 (+226)" value="226BF">布基纳法索 (+226)</option><option label="布隆迪 (+257)" value="257BI">布隆迪 (+257)</option><option label="赤道几内亚 (+240)" value="240GQ">赤道几内亚 (+240)</option><option label="丹麦 (+45)" value="45DK">丹麦 (+45)</option><option label="德国 (+49)" value="49DE">德国 (+49)</option><option label="东帝汶 (+670)" value="670TL">东帝汶 (+670)</option><option label="多哥 (+228)" value="228TG">多哥 (+228)</option><option label="多米尼加共和国 (+1)" value="1DO">多米尼加共和国 (+1)</option><option label="多米尼加 (+1)" value="1DM">多米尼加 (+1)</option><option label="俄罗斯 (+7)" value="7RU">俄罗斯 (+7)</option><option label="厄瓜多尔 (+593)" value="593EC">厄瓜多尔 (+593)</option><option label="厄立特里亚 (+291)" value="291ER">厄立特里亚 (+291)</option><option label="法国 (+33)" value="33FR">法国 (+33)</option><option label="法罗群岛 (+298)" value="298FO">法罗群岛 (+298)</option><option label="法属波利尼西亚 (+689)" value="689PF">法属波利尼西亚 (+689)</option><option label="法属圭亚那 (+594)" value="594GF">法属圭亚那 (+594)</option><option label="法属圣马丁 (+590)" value="590MF">法属圣马丁 (+590)</option><option label="梵蒂冈 (+379)" value="379VA">梵蒂冈 (+379)</option><option label="菲律宾 (+63)" value="63PH">菲律宾 (+63)</option><option label="斐济 (+679)" value="679FJ">斐济 (+679)</option><option label="芬兰 (+358)" value="358FI">芬兰 (+358)</option><option label="佛得角 (+238)" value="238CV">佛得角 (+238)</option><option label="福克兰群岛（马尔维纳斯群岛） (+500)" value="500FK">福克兰群岛（马尔维纳斯群岛） (+500)</option><option label="冈比亚 (+220)" value="220GM">冈比亚 (+220)</option><option label="哥伦比亚 (+57)" value="57CO">哥伦比亚 (+57)</option><option label="哥斯达黎加 (+506)" value="506CR">哥斯达黎加 (+506)</option><option label="格林纳达 (+1)" value="1GD">格林纳达 (+1)</option><option label="格陵兰 (+299)" value="299GL">格陵兰 (+299)</option><option label="格鲁吉亚 (+995)" value="995GE">格鲁吉亚 (+995)</option><option label="根西岛 (+44)" value="44GG">根西岛 (+44)</option><option label="古巴 (+53)" value="53CU">古巴 (+53)</option><option label="瓜德罗普岛 (+590)" value="590GP">瓜德罗普岛 (+590)</option><option label="关岛 (+1)" value="1GU">关岛 (+1)</option><option label="圭亚那 (+592)" value="592GY">圭亚那 (+592)</option><option label="哈萨克斯坦 (+7)" value="7KZ">哈萨克斯坦 (+7)</option><option label="海地 (+509)" value="509HT">海地 (+509)</option><option label="韩国 (+82)" value="82KR">韩国 (+82)</option><option label="荷兰 (+31)" value="31NL">荷兰 (+31)</option><option label="荷兰加勒比 (+599)" value="599BQ">荷兰加勒比 (+599)</option><option label="荷属圣马丁 (+1)" value="1SX">荷属圣马丁 (+1)</option><option label="黑山共和国 (+382)" value="382ME">黑山共和国 (+382)</option><option label="洪都拉斯 (+504)" value="504HN">洪都拉斯 (+504)</option><option label="基里巴斯 (+686)" value="686KI">基里巴斯 (+686)</option><option label="吉布提 (+253)" value="253DJ">吉布提 (+253)</option><option label="吉尔吉斯斯坦 (+996)" value="996KG">吉尔吉斯斯坦 (+996)</option><option label="几内亚 (+224)" value="224GN">几内亚 (+224)</option><option label="几内亚比绍 (+245)" value="245GW">几内亚比绍 (+245)</option><option label="加拿大 (+1)" value="1CA">加拿大 (+1)</option><option label="加纳 (+233)" value="233GH">加纳 (+233)</option><option label="加蓬 (+241)" value="241GA">加蓬 (+241)</option><option label="柬埔寨 (+855)" value="855KH">柬埔寨 (+855)</option><option label="捷克共和国 (+420)" value="420CZ">捷克共和国 (+420)</option><option label="津巴布韦 (+263)" value="263ZW">津巴布韦 (+263)</option><option label="喀麦隆 (+237)" value="237CM">喀麦隆 (+237)</option><option label="卡塔尔 (+974)" value="974QA">卡塔尔 (+974)</option><option label="开曼群岛 (+1)" value="1KY">开曼群岛 (+1)</option><option label="科科斯群岛 (+61)" value="61CC">科科斯群岛 (+61)</option><option label="科摩罗 (+269)" value="269KM">科摩罗 (+269)</option><option label="象牙海岸 (+225)" value="225CI">象牙海岸 (+225)</option><option label="科威特 (+965)" value="965KW">科威特 (+965)</option><option label="克罗地亚 (+385)" value="385HR">克罗地亚 (+385)</option><option label="肯尼亚 (+254)" value="254KE">肯尼亚 (+254)</option><option label="库克群岛 (+682)" value="682CK">库克群岛 (+682)</option><option label="库拉索 (+599)" value="599CW">库拉索 (+599)</option><option label="拉脱维亚 (+371)" value="371LV">拉脱维亚 (+371)</option><option label="莱索托 (+266)" value="266LS">莱索托 (+266)</option><option label="老挝 (+856)" value="856LA">老挝 (+856)</option><option label="黎巴嫩 (+961)" value="961LB">黎巴嫩 (+961)</option><option label="立陶宛 (+370)" value="370LT">立陶宛 (+370)</option><option label="利比里亚 (+231)" value="231LR">利比里亚 (+231)</option><option label="利比亚 (+218)" value="218LY">利比亚 (+218)</option><option label="列支敦士登 (+423)" value="423LI">列支敦士登 (+423)</option><option label="留尼汪 (+262)" value="262RE">留尼汪 (+262)</option><option label="卢森堡 (+352)" value="352LU">卢森堡 (+352)</option><option label="卢旺达 (+250)" value="250RW">卢旺达 (+250)</option><option label="罗马尼亚 (+40)" value="40RO">罗马尼亚 (+40)</option><option label="马达加斯加 (+261)" value="261MG">马达加斯加 (+261)</option><option label="曼岛 (+44)" value="44IM">曼岛 (+44)</option><option label="马尔代夫 (+960)" value="960MV">马尔代夫 (+960)</option><option label="马耳他 (+356)" value="356MT">马耳他 (+356)</option><option label="马拉维 (+265)" value="265MW">马拉维 (+265)</option><option label="马来西亚 (+60)" value="60MY">马来西亚 (+60)</option><option label="马里 (+223)" value="223ML">马里 (+223)</option><option label="马绍尔群岛 (+692)" value="692MH">马绍尔群岛 (+692)</option><option label="马提尼克 (+596)" value="596MQ">马提尼克 (+596)</option><option label="马约特 (+262)" value="262YT">马约特 (+262)</option><option label="毛里求斯 (+230)" value="230MU">毛里求斯 (+230)</option><option label="毛里塔尼亚 (+222)" value="222MR">毛里塔尼亚 (+222)</option><option label="美国 (+1)" value="1US">美国 (+1)</option><option label="美属萨摩亚 (+1)" value="1AS">美属萨摩亚 (+1)</option><option label="美属维京群岛 (+1)" value="1VI">美属维京群岛 (+1)</option><option label="蒙古 (+976)" value="976MN">蒙古 (+976)</option><option label="蒙塞拉特 (+1)" value="1MS">蒙塞拉特 (+1)</option><option label="孟加拉国 (+880)" value="880BD">孟加拉国 (+880)</option><option label="秘鲁 (+51)" value="51PE">秘鲁 (+51)</option><option label="密克罗尼西亚联邦 (+691)" value="691FM">密克罗尼西亚联邦 (+691)</option><option label="缅甸 (+95)" value="95MM">缅甸 (+95)</option><option label="摩尔多瓦 (+373)" value="373MD">摩尔多瓦 (+373)</option><option label="摩洛哥 (+212)" value="212MA">摩洛哥 (+212)</option><option label="摩纳哥 (+377)" value="377MC">摩纳哥 (+377)</option><option label="莫桑比克 (+258)" value="258MZ">莫桑比克 (+258)</option><option label="墨西哥 (+52)" value="52MX">墨西哥 (+52)</option><option label="纳米比亚 (+264)" value="264NA">纳米比亚 (+264)</option><option label="南非 (+27)" value="27ZA">南非 (+27)</option><option label="南乔治亚岛和南桑威齐群岛 (+500)" value="500GS">南乔治亚岛和南桑威齐群岛 (+500)</option><option label="南苏丹 (+211)" value="211SS">南苏丹 (+211)</option><option label="瑙鲁 (+674)" value="674NR">瑙鲁 (+674)</option><option label="尼加拉瓜 (+505)" value="505NI">尼加拉瓜 (+505)</option><option label="尼泊尔 (+977)" value="977NP">尼泊尔 (+977)</option><option label="尼日尔 (+227)" value="227NE">尼日尔 (+227)</option><option label="尼日利亚 (+234)" value="234NG">尼日利亚 (+234)</option><option label="纽埃 (+683)" value="683NU">纽埃 (+683)</option><option label="挪威 (+47)" value="47NO">挪威 (+47)</option><option label="诺福克岛 (+672)" value="672NF">诺福克岛 (+672)</option><option label="帕劳 (+680)" value="680PW">帕劳 (+680)</option><option label="皮特凯恩群岛 (+64)" value="64PN">皮特凯恩群岛 (+64)</option><option label="葡萄牙 (+351)" value="351PT">葡萄牙 (+351)</option><option label="日本 (+81)" value="81JP">日本 (+81)</option><option label="瑞典 (+46)" value="46SE">瑞典 (+46)</option><option label="瑞士 (+41)" value="41CH">瑞士 (+41)</option><option label="萨尔瓦多 (+503)" value="503SV">萨尔瓦多 (+503)</option><option label="萨摩亚 (+685)" value="685WS">萨摩亚 (+685)</option><option label="塞尔维亚 (+381)" value="381RS">塞尔维亚 (+381)</option><option label="塞拉利昂 (+232)" value="232SL">塞拉利昂 (+232)</option><option label="塞内加尔 (+221)" value="221SN">塞内加尔 (+221)</option><option label="塞浦路斯 (+357)" value="357CY">塞浦路斯 (+357)</option><option label="塞舌尔 (+248)" value="248SC">塞舌尔 (+248)</option><option label="沙特阿拉伯 (+966)" value="966SA">沙特阿拉伯 (+966)</option><option label="圣巴泰勒米 (+590)" value="590BL">圣巴泰勒米 (+590)</option><option label="圣诞岛 (+61)" value="61CX">圣诞岛 (+61)</option><option label="圣多美和普林西比 (+239)" value="239ST">圣多美和普林西比 (+239)</option><option label="圣赫勒拿 (+290)" value="290SH">圣赫勒拿 (+290)</option><option label="圣基茨和尼维斯 (+1)" value="1KN">圣基茨和尼维斯 (+1)</option><option label="圣卢西亚 (+1)" value="1LC">圣卢西亚 (+1)</option><option label="圣马力诺 (+378)" value="378SM">圣马力诺 (+378)</option><option label="圣皮埃尔和密克隆群岛 (+508)" value="508PM">圣皮埃尔和密克隆群岛 (+508)</option><option label="圣文森特和格林纳丁斯 (+1)" value="1VC">圣文森特和格林纳丁斯 (+1)</option><option label="斯里兰卡 (+94)" value="94LK">斯里兰卡 (+94)</option><option label="斯洛伐克 (+421)" value="421SK">斯洛伐克 (+421)</option><option label="斯洛文尼亚 (+386)" value="386SI">斯洛文尼亚 (+386)</option><option label="斯瓦尔巴特和扬马延 (+47)" value="47SJ">斯瓦尔巴特和扬马延 (+47)</option><option label="斯威士兰 (+268)" value="268SZ">斯威士兰 (+268)</option><option label="苏丹 (+249)" value="249SD">苏丹 (+249)</option><option label="苏里南 (+597)" value="597SR">苏里南 (+597)</option><option label="所罗门群岛 (+677)" value="677SB">所罗门群岛 (+677)</option><option label="索马里 (+252)" value="252SO">索马里 (+252)</option><option label="塔吉克斯坦 (+992)" value="992TJ">塔吉克斯坦 (+992)</option><option label="泰国 (+66)" value="66TH">泰国 (+66)</option><option label="坦桑尼亚 (+255)" value="255TZ">坦桑尼亚 (+255)</option><option label="汤加 (+676)" value="676TO">汤加 (+676)</option><option label="特克斯和凯科斯群岛 (+1)" value="1TC">特克斯和凯科斯群岛 (+1)</option><option label="特立尼达和多巴哥 (+1)" value="1TT">特立尼达和多巴哥 (+1)</option><option label="突尼西亞 (+216)" value="216TN">突尼西亞 (+216)</option><option label="图瓦卢 (+688)" value="688TV">图瓦卢 (+688)</option><option label="土耳其 (+90)" value="90TR">土耳其 (+90)</option><option label="土库曼斯坦 (+993)" value="993TM">土库曼斯坦 (+993)</option><option label="托克劳 (+690)" value="690TK">托克劳 (+690)</option><option label="瓦利斯和富图纳 (+681)" value="681WF">瓦利斯和富图纳 (+681)</option><option label="瓦努阿图 (+678)" value="678VU">瓦努阿图 (+678)</option><option label="危地马拉 (+502)" value="502GT">危地马拉 (+502)</option><option label="委内瑞拉 (+58)" value="58VE">委内瑞拉 (+58)</option><option label="文莱 (+673)" value="673BN">文莱 (+673)</option><option label="乌干达 (+256)" value="256UG">乌干达 (+256)</option><option label="乌克兰 (+380)" value="380UA">乌克兰 (+380)</option><option label="乌拉圭 (+598)" value="598UY">乌拉圭 (+598)</option><option label="乌兹别克斯坦 (+998)" value="998UZ">乌兹别克斯坦 (+998)</option><option label="希腊 (+30)" value="30GR">希腊 (+30)</option><option label="西班牙 (+34)" value="34ES">西班牙 (+34)</option><option label="西撒哈拉 (+212)" value="212EH">西撒哈拉 (+212)</option><option label="新加坡 (+65)" value="65SG">新加坡 (+65)</option><option label="新喀里多尼亚 (+687)" value="687NC">新喀里多尼亚 (+687)</option><option label="新西兰 (+64)" value="64NZ">新西兰 (+64)</option><option label="匈牙利 (+36)" value="36HU">匈牙利 (+36)</option><option label="牙买加 (+1)" value="1JM">牙买加 (+1)</option><option label="亚美尼亚 (+374)" value="374AM">亚美尼亚 (+374)</option><option label="也门 (+967)" value="967YE">也门 (+967)</option><option label="伊拉克 (+964)" value="964IQ">伊拉克 (+964)</option><option label="以色列 (+972)" value="972IL">以色列 (+972)</option><option label="意大利 (+39)" value="39IT">意大利 (+39)</option><option label="印度 (+91)" value="91IN">印度 (+91)</option><option label="印度尼西亚 (+62)" value="62ID">印度尼西亚 (+62)</option><option label="英国 (+44)" value="44GB">英国 (+44)</option><option label="英属维京群岛 (+1)" value="1VG">英属维京群岛 (+1)</option><option label="英属印度洋领地 (+246)" value="246IO">英属印度洋领地 (+246)</option><option label="约旦 (+962)" value="962JO">约旦 (+962)</option><option label="越南 (+84)" value="84VN">越南 (+84)</option><option label="赞比亚 (+260)" value="260ZM">赞比亚 (+260)</option><option label="泽西岛 (+44)" value="44JE">泽西岛 (+44)</option><option label="乍得 (+235)" value="235TD">乍得 (+235)</option><option label="直布罗陀 (+350)" value="350GI">直布罗陀 (+350)</option><option label="智利 (+56)" value="56CL">智利 (+56)</option><option label="中非共和国 (+236)" value="236CF">中非共和国 (+236)</option><option label="中国 (+86)" value="86CN" selected>中国 (+86)</option></select>
            <input @input="handleInput" v-model="userInformation.phoneNumber" @focus="handleFocus('input')" @blur="handleBlur('input')" class="standard-input light-font" style="width: 50%;outline: none;height: 38px;box-shadow: none;-webkit-apprarance:none;" type="text">
        </div>
        <button class="normal-button mt25 normal-button-disabled" @click="handleCheck()">立即发送短信</button>
        <div style="position: absolute;bottom:0;text-align: center;width: 88%;margin: 0 auto;overflow-x: hidden;">
            <span class=" light-font other-login" style="background-color: white;padding: 0 22px;font-size: 15px;color: #909090;font-weight:200;z-index: 999">使用其他方式</span>
            <div class="fxal fxar" style="padding: 22px">
                <div @click="handlePasswordLogin()" class="fxal">
                    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: block; fill: rgb(0, 132, 137);"><path d="m22.5 4h-21c-.83 0-1.5.67-1.5 1.51v12.99c0 .83.67 1.5 1.5 1.5h20.99a1.5 1.5 0 0 0 1.51-1.51v-12.98c0-.84-.67-1.51-1.5-1.51zm.5 14.2-6.14-7.91 6.14-4.66v12.58zm-.83-13.2-9.69 7.36c-.26.2-.72.2-.98 0l-9.67-7.36h20.35zm-21.17.63 6.14 4.67-6.14 7.88zm.63 13.37 6.3-8.1 2.97 2.26c.62.47 1.57.47 2.19 0l2.97-2.26 6.29 8.1z" fill-rule="evenodd"></path></svg>
                    <p class="font-mid ml10">账号密码登陆</p>
                </div>
                <div class="fxal">
                    <svg viewBox="0 0 32 32" role="presentation" aria-hidden="true" focusable="false" style="height: 1em; width: 1em; display: block; fill: rgb(213, 43, 42);"><path d="m30.85 14.19c-.15.61-.85.98-1.46.77-.64-.22-.97-.86-.76-1.5.67-2.14.27-4.05-1.21-5.7-1.37-1.56-3.5-2.17-5.47-1.78-.64.15-1.25-.28-1.37-.89-.15-.64.27-1.29.88-1.41 2.77-.61 5.68.31 7.72 2.51 1.97 2.24 2.55 5.33 1.67 8zm-4.77-5.18c-.95-1.11-2.4-1.53-3.74-1.25-.52.12-.88.61-.79 1.2.12.58.64.92 1.22.8.7-.15 1.31.06 1.82.61.49.58.61 1.23.39 1.9-.15.58.15 1.13.67 1.29a1.02 1.02 0 0 0 1.25-.67c.46-1.44.18-2.73-.82-3.86zm-9.33 13.42c-1 2.33-3.95 3.62-6.5 2.79-2.43-.77-3.53-3.22-2.43-5.42 1.06-2.11 3.8-3.31 6.2-2.69 2.52.64 3.74 3 2.73 5.33zm-5.13-1.81c-.82-.34-1.79 0-2.28.77s-.24 1.68.52 2.05 1.85 0 2.34-.77c.49-.83.24-1.72-.58-2.05zm1.94-.8c-.76-.34-1.37.8-.64 1.07.33.15.64.06.88-.31.15-.34.09-.64-.24-.77zm-.03 6.83c-5.08.52-9.45-1.78-9.79-5.18-.34-3.34 3.49-6.47 8.57-6.99 5.1-.49 9.45 1.84 9.78 5.18.34 3.34-3.55 6.5-8.57 6.99zm10.12-11.14c-.18-.03-.3-.09-.39-.13-.15-.09-.27-.28-.12-.64.52-1.32.55-2.36.03-3.06-1.06-1.44-3.68-1.38-6.81-.06l-.24.09c-.34.12-.67.03-.52-.43.52-1.66.4-2.85-.3-3.62-.89-.86-2.28-.89-4.23-.12-3.92 1.56-10.43 7.35-10.43 12.75 0 1.63.64 3.1 1.91 4.35 2.53 2.57 6.66 3.86 10.95 3.86 3.98 0 7.75-1.23 10.09-2.94 2.31-1.72 3.77-3.86 3.77-5.82 0-2.12-1.67-3.59-3.71-4.23z" fill-rule="evenodd"></path></svg>
                    <p class="font-mid ml10">微博</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../../static/css/rooms.css'
    export default {
        name: "PhoneLogin",
        data(){
            return {
                phoneInput: null,
                areaSelected: null,
                enterButton: null,
                userInformation:{
                    area:'',
                    phoneNumber: ''
                }
            }
        },
        methods:{
            handlePasswordLogin(){
                this.$emit('passwordLogin')
            },
            handleFocus(attr){
                if(attr === 'input'){
                    this.phoneInput.style.border = '1px solid darkcyan'
                }else{
                    this.areaSelected.style.border = '1px solid darkcyan'
                }
            },
            handleBlur(attr){
                if(attr === 'input'){
                    this.phoneInput.style.border = '1px solid lightgray'
                }else{
                    this.areaSelected.style.border = '1px solid lightgray'
                }
            },
            handleInput(){
                const phoneNumber = this.userInformation.phoneNumber
                if(phoneNumber.length === 11 && phoneNumber.match(/^1[0-9]{10}/)){
                    this.enterButton.style.opacity = '1'
                    this.enterButton.disabled = false
                }else{
                    this.enterButton.style.opacity = '0.5'
                    this.enterButton.disabled = true
                }
            },
            handleBack(){
                this.$router.go(-1)
            },
            handleCheck(){
                this.$emit('checkPhoneId',this.userInformation.phoneNumber)
            }
        },
        mounted() {
            this.phoneInput = document.querySelector('.standard-input')
            this.areaSelected = document.querySelector('.select-country')
            this.enterButton = document.querySelector('.normal-button')
        },
        watch:{

        }
    }
</script>

<style scoped>
    .select-country{
        outline: none;
        font-size: 16px;
        line-height: 22px;
        width: 42%;
        appearance:none;
        border: 1px solid lightgrey;
        padding: 4px 6px;
        height: 50px;
        border-radius: 3px;
        transition: 0.3s;
    }
    .select-country-active{
        border-color: darkcyan;
    }
    option{
        border: none;
    }

    .other-login::before{
        content: "" !important;
        position: absolute !important;
        border-bottom: 1px solid rgb(228,228,228);
        left: 0;
        width: 2000px;
        top: 13%;
        right: 100%;
        height: 1px;
        color: lightgrey;
        z-index: -999;
    }
</style>
