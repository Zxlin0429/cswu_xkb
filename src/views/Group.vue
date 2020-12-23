<template>
  <div class="group">
    <div class="page page1">
      <div class="group_top">共青团重庆城市管理职业学院委员会</div>
      <!-- <img src="../assets/group/group-top.png" class="group_top" /> -->
      <!-- <img
        src="../assets/group/group-top-banner.gif"
        class="group_top_banner"
      /> -->
      <img
        src="../assets/group/group-top-banner.jpg"
        class="group_top_banner"
      />
      <div class="textbox">
        <p>和 谐 共 进</p>
        <p>求 实 创 新</p>
      </div>
      <div class="slide_tips">
        <i class="s_line"></i>
        <span class="txt">滑动</span>
      </div>
    </div>
    <div class="page page2">
      <p class="txt">
        共青团重庆城市管理职业学院委员会是中国
        <span class="m"></span>
        共产党领导的先进青年的群众组织,
        <span class="m"></span>
        秉承“能力本位、素质教育、可持续发展”的
        <span class="m"></span>
        办学理念,有力助推青年成长成才。
      </p>
      <div class="details_con_page2">
        <div class="detail_list">
          <p @click="detail_list_1 = true">团委简介</p>
          <img
            src="https://www.tencent.com/data/index/index_detail_2.jpg"
            @click="detail_list_1 = true"
          />
        </div>
        <div class="detail_list">
          <p @click="detail_list_2 = true">部门职责</p>
          <img
            src="https://www.tencent.com/data/index/index_detail_3.jpg"
            @click="detail_list_2 = true"
          />
        </div>

        <van-popup v-model="detail_list_1" closeable>
          <h4>共青团重庆城市管理职业学院委员会</h4>
          <p>
            共青团重庆城市管理职业学院委员会是中国共产党领导的先进青年的群众组织，是重庆城市管理职业学院青年在实践中学习中国特色社会主义和共产主义的学校，是学校党的助手和后备军，是联系党和青年学生的桥梁和纽带。重庆城市管理职业学院团委是在学校党委领导和上级团组织指导下，全校各级团组织和团员青年的组织和领导机关。
          </p>
          <p>
            重庆城市管理职业学院团委现辖各二级团组织7个，设组织部、宣传部、社团部、项目部、校青年志愿者总队、学生社区自律委员会、睿德艺术团、国旗护卫队八个直属工作部门，并指导校学生会的工作。
          </p>
          <p>
            重庆城市管理职业学院团委秉承“能力本位、素质教育、可持续发展”的办学理念，弘扬“和谐共进
            求实创新”、“修身 重道
            强能”的校风学风，积极配合学校育人中心工作，有力助推青年成长成才，紧紧围绕“组织青年、引导青年、服务青年、维护青少年合法权益”四项工作职能，立足青年学生思想引领和成长成才服务两项工作任务，在基层团组织建设、青年思想政治教育、素质拓展、大学生创业就业、科技创新、志愿服务、学生社团建设、学生参与校园民主管理、校园文化建设等方面取得了显著成绩。得到了全校广大团员青年的积极认可和支持，也得到了学校党委和上级团组织的充分肯定。
          </p>
          <p>
            展望未来，重庆城市管理职业学院共青团将不断地内强素质、外树形象，围绕学校育人中心工作，进行更有力的探索实践，争取更大的成绩，以回报各级领导和社会各界的支持。
          </p>
        </van-popup>

        <van-popup v-model="detail_list_2" closeable>
          <h2>团委机构设置</h2>
          <h3>组织部</h3>
          <p>
            1.负责二级团组织机构设置、人员编制、班子配备、干部队伍建设，协助党组织管理二级团干部，建立健全团干部档案；<br />

            2.
            统筹做好学校共青团改革的落实和督促，切实将各项改革举措落到实处，建设青年学生身边的共青团；<br />

            3.
            组织开展全校团干部的培训工作，转变团干部作风，关心团干部的思想状况和成长需求，引导团干部参与课题研究，提升团干部的理论水平和综合能力；<br />

            4.
            做好基础台账管理，负责二级团组织及其下属团支部团员、团干部报表统计工作；<br />

            5. 加强制度建设，修订完善团的组织建设方面的规章制度；<br />

            6.
            规范基础团务，负责指导二级团组织换届、新团员发展、团费收缴以及“三会两制一课”等工作；<br />

            7.
            负责团内评优，指导团内的奖励、处分、离团等工作遴选和表彰优秀青年个人和集体；<br />

            8.
            做好团员青年“推优入党”工作，加强对全校“推优”工作的指导、检查和督促。
          </p>
          <h3>宣传部</h3>
          <p>
            1.及时宣传党和国家的各项方针政策以及上级的各项决定；提高大家的思想认识，促进各项工作的展开；传播校园文化，引导正确的舆论导向；<br />

            2.负责团员青年思想政治教育工作，不断提高宣传水平，制定思想政治教育计划，创建宣传平台，加强对青年进行思想引领工作；
            <br />

            3.拓宽宣传阵地，畅通宣传渠道，配合各部门活动的开展，及时做好宣传工作，通过展板、条幅、海报、网络（含微信公众平台运营、微博运营）等方式进行多层次、多方位、多角度的立体性宣传报道，广泛宣传推广先进集体和先进的个人事迹；<br />

            4.做好日常性的宣传工作，及时报送新闻，对校团委网站、宣传栏、资源库等进行日常维护，开展共青团文化建设；<br />

            5.配合校团委和各部门完成好工作任务及完成上级交给的其它工作任务。
          </p>
          <h3>社团部</h3>
          <p>
            1. 负责校内学生社团的成立审批、年审、注销、组织建设工作；<br />

            2. 配合校团委做好学生社团的活动管理和工作保障等工作；<br />

            3. 协助各学生社团挂靠单位做好校内学生社团的联系、服务和引导工作；<br />

            4. 支持校学生会配合团组织加强对学生社团的引导、服务和联系。
          </p>
          <h3>项目部</h3>
          <p>
            1.
            负责学生会组织各项活动的顶层规划设计，重点围绕学术科技、社会实践、创新创业、志愿服务、素质拓展、校园文化等方面，打造系列有特色、有影响力的学生会活动品牌；<br />

            2.
            负责指导联系院（部）学生会以项目制方式承担校学生会各项重大活动，并推动其具体组织实施。
          </p>
          <h2>学生会设置</h2>
          <h3>办公室</h3>
          <p>
            负责各类信息上传下达；负责学生会大型会议、重大活动后勤保障工作以及内部例会的会务、秘书工作；负责各项规章制度、重要文稿的起草和日常文件的处理工作；建立落实学生会主席团和工作部门负责人述职评议制度；负责各二级学生会组织考核评价工作；负责校学生会财务及物资管理工作。
          </p>
          <h3>治保纪检部</h3>
          <p>
            主要协助有关部门对全院同学进行安全教育，增强广大学生的自律和安全防范意识，协助老师做好做好学生食堂管理工作，做好校园内文明新人的监督工作协助学院有关部门营造安定、有序的校园环境。为教学工作的安全校园建设等工作的正常展开提供保障。为维护校园的安全稳定营造“和谐”的校园文化氛围提供保障。
          </p>
          <h3>学习部</h3>
          <p>
            负责组织开展团学骨干学习成长沙龙，搭建学生骨干学习交流平台，着力构建学习型学生会组织；负责协助团委做好青马工程大学生骨干选拔、培养等工作；负责开展学生思想、学习、生活等方面动态调研，为学生会工作决策提供参考。
          </p>
          <h3>权益部</h3>
          <p>
            负责收集、听取涉及广大同学切身利益和普遍诉求的问题，整理并转达相关部门，代表和维护学生合法权益；负责安排学生代表与学校领导面对面活动；负责学生线上权益服务平台“权小益”的开发运营工作；指导各二级学生会组织定期规范召开学生代表大会。
          </p>
          <h3>学生健康互助中心</h3>
          <p>
            联系和指导各二级学院心理联络站，了解和掌握全校学生心理舆情与动态；协助学校心理咨询中心开展各项心理普查和危机干预排查等常规工作；协助心理咨询中心开展各类心理健康教育活动。
          </p>
          <h3>创新发展部</h3>
          <p>
            协助学校就业指导中心，整理招聘公司文件工作，双选会的布置工作。组织开展各类学术性、实践性、专业性创新创业活动；配合做好“挑战杯”大学生课外学术科技作品竞赛、“创青春”大学生创业大赛的组织工作；完成校团委、校学生会交办的其它工作。
          </p>
          <h2>其它校级学生组织主要职责</h2>
          <h3>校睿德艺术团</h3>
          <p>
            学校睿德艺术团隶属于共青团重庆城市管理职业学院委员会(校团委)，是全校规模最大、人数最多的文化艺术性团体。校艺术团坚持以”依仁游艺，以文化人”为建团宗旨,坚持”弘扬时代主旋律,做向上向善好青年”为办团理念。自2014年建团以来,始终活跃在校内外的舞台上,展现了城管院学子良好的精神风貌，受到了广大师生和社会各界的广泛好评。在校艺术团历届成员的不断努力下，队伍不断壮大,现已成为组织、有纪律的200余人的学生组织。现设有主持队、表演队、舞蹈队、合唱队以及礼仪队。
          </p>
          <h3>校青年志愿者总队</h3>
          <p>
            校青年志愿者总队(简称总队)是全校学生公益组织的组织管理机构，是全校学生公益组织的忠实代表。总队的基本任务是:
            <br />

            1.遵循和贯彻党的教育方针，促进大学生德智、体全面发展，团结和引导同学成为热爱公益事业、具有奉献精神的大学生；<br />

            2.以直属总队、各青年志愿者分队、全校志愿服务类社团为载体,全面开展志愿服务活动，提高我校学生志愿服务意识和思想道德修养，促进我校学生素质全面发展，推进学校精神文明建设；<br />

            3.分发挥分队群众性、参与性强的特点，使其成为学生参与志愿服务活动,提高实践能力,扩大人际交往的重要学生组织；<br />

            4.管理、引强协调和服务我校各类学生公益组织，以活动为舞台，促进其整体水平的提高，进步推动我校志愿工作的开展。
          </p>
          <h3>学生社区自律委员会</h3>
          <p>
            协助学生处参与学生社区事务的具体管理，维护学生公寓的正常秩序。做好社区公共空间文化建设、社区形象塑造、文化浸润；负责社区内学生学习帮扶、学风建设、朋辈辅导、文明寝室等评选；负责“学生社区文化艺术节”等文化活动的策划、组织、审批等。
          </p>
          <h3>国旗护卫队</h3>
          <p>
            重庆城市管理职业学院国旗护卫队，由共青团重庆城市管理职业学院委员会直接领导。国旗班作为我校开展爱国主义教育的主阵地，以护卫国旗为使命,以宏扬爱国主义精神为己任，大力弘扬爱国主义精神，培育具有爱国主义思想的新时代大学青年。国旗护卫队的任务是升、降国旗和护卫国旗，参加各级重大活动的升旗工作以及学校安排的其他工作。国旗班力求通过举行升旗仪式等爱国主义活动，大力发扬爱国主义精神。
          </p>
        </van-popup>
      </div>
    </div>
    <div class="page page3">
      <GroupI msg1="连接" msg2="学校与师生" msg3="上传下达，上行下效" />
      <div class="Group_Page3_Swipe">
        <van-swipe class="my-swipe" :autoplay="10000" indicator-color="white">
          <van-swipe-item v-for="(i, index) in GroupPage3Swipe" :key="index">
            <div class="year">
              <div class="history-title">{{ i.y }}</div>
              <div class="li" v-for="(j, index) in i.msg" :key="index">
                <div class="left">{{ j.m }}</div>
                <div class="right">
                  {{ j.t }}
                </div>
                <div class="both"></div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="page page4">
      <GroupI msg1="连接" msg2="人才与发展" msg3="激发活力，助力成长" />
      <div class="Group_Page4_Swipe">
        <van-swipe :autoplay="3500">
          <van-swipe-item
            v-for="(image, index) in GroupPage4Swipe"
            :key="index"
          >
            <img v-lazy="image" width="100%" height="200px" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>
<script>
import GroupI from "@/components/GroupI.vue";
export default {
  name: "Group",
  components: {
    GroupI,
  },
  data() {
    return {
      detail_list_1: false,
      detail_list_2: false,
      GroupPage3Swipe: [
        {
          y: 2020,
          msg: [
            {
              m: "12月",
              t: "我校青年志愿者服务总队荣获第八届重庆青年志愿者优秀集体",
            },
            {
              m: "11月",
              t: "我校举办校园文化艺术节文明礼仪大赛",
            },
            {
              m: "2月",
              t: "我校组织青年志愿者战疫情贡献青春力量",
            },
          ],
        },
        {
          y: 2019,
          msg: [
            {
              m: "12月",
              t:
                "重庆城市管理职业学院第三次学生代表大会预备会议在学术报告厅召开，正式学生代表共200人参加了会议",
            },
            {
              m: "11月",
              t: "我校举办2019年校园文化艺术节辩论赛",
            },
            {
              m: "11月",
              t:
                "我校参加了由重庆市教委主办在西南政法大学举行的2019重庆市大学生田径比赛。本次比赛共有600余人参赛",
            },
          ],
        },
        {
          y: 2018,
          msg: [
            {
              m: "6月",
              t: "我校志愿服务项目入围第四届中国青年志愿服务项目大赛",
            },
            {
              m: "5月",
              t: "我校团委喜获“重庆市五四红旗团委",
            },
            {
              m: "4月",
              t: "我校学生荣获2017年度全国高职学生“劲牌阳光奖学金”特别奖",
            },
          ],
        },
      ],
      GroupPage4Swipe: [ //底部轮播
        "http://8.133.168.164/img/20201216/groupLunbo1.jpg",
        "http://8.133.168.164/img/20201216/groupLunbo2.jpg",
        "http://8.133.168.164/img/20201216/groupLunbo3.jpg",
      ],
    };
  },
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
  line-height: 1.5;
  box-sizing: border-box;
}
.group {
  width: 100%;
  font-family: ZXLIN;
}
.group .page1 {
  position: relative;
  height: 520px;
  background-color: #2a2e2e;
}
.group_top {
  position: absolute;
  z-index: 9999;
  width: 290px;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  animation: group_top 1s 0s linear 1 normal both;
  text-align: center;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 3px;
  font-size: 15px;
  font-family: CSWU;
}
@keyframes group_top {
  0% {
    -webkit-transform: perspective(400px) rotateX(90deg) translateX(-50%);
    transform: perspective(400px) rotateX(90deg) translateX(-50%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
    z-index: 10;
  }
  40% {
    -webkit-transform: perspective(400px) rotateX(-20deg) translateX(-50%);
    transform: perspective(400px) rotateX(-20deg) translateX(-50%);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    z-index: 10;
  }
  60% {
    -webkit-transform: perspective(400px) rotateX(10deg) translateX(-50%);
    transform: perspective(400px) rotateX(10deg) translateX(-50%);
    opacity: 1;
    z-index: 10;
  }
  80% {
    -webkit-transform: perspective(400px) rotateX(-5deg) translateX(-50%);
    transform: perspective(400px) rotateX(-5deg) translateX(-50%);
    z-index: 10;
  }
  100% {
    -webkit-transform: perspective(400px) translateX(-50%);
    transform: perspective(400px) translateX(-50%);
    z-index: 10;
  }
}
.group_top_banner {
  height: 520px;
  min-width: 100%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
.group .page1 .textbox {
  opacity: 0;
  position: absolute;
  color: rgba(255, 255, 255, 0.9);
  font-size: 38px;
  line-height: 50px;
  top: 185px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-weight: 300;
  line-height: 1.5;
  animation: a_banner 0.5s 0.5s linear forwards;
  -webkit-animation: a_banner 0.5s 0.5s linear forwards;
  -ms-animation: a_banner 0.5s 0.5s linear forwards;
  -moz-animation: a_banner 0.5s 0.5s linear forwards;
  -o-animation: a_banner 0.5s 0.5s linear forwards;
}
@keyframes a_banner {
  0% {
    transform: translate(-50%, 20px);
    -webkit-transform: translate(-50%, 20px);
    -ms-transform: translate(-50%, 20px);
    -moz-transform: translate(-50%, 20px);
    -o-transform: translate(-50%, 20px);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    -o-transform: translate(-50%, 0);
    opacity: 1;
  }
}
.textbox > p {
  margin: 0;
  padding: 0;
}
.group .page1 .slide_tips {
  display: block;
  width: 30px;
  height: 57px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  bottom: 30px;
  z-index: 1;
}
.group .page1 .s_line {
  display: block;
  width: 2px;
  height: 32px;
  border-radius: 2px;
  position: absolute;
  left: 50%;
  margin-left: -1px;
  top: 0px;
  background: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  animation: a_banner_s_line 3s 0.3s linear both infinite;
  -webkit-animation: a_banner_s_line 3s 0.3s linear both infinite;
  -ms-animation: a_banner_s_line 3s 0.3s linear both infinite;
  -moz-animation: a_banner_s_line 3s 0.3s linear both infinite;
  -o-animation: a_banner_s_line 3s 0.3s linear both infinite;
}
@keyframes a_banner_s_line {
  0% {
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    opacity: 1;
  }
  20% {
    transform: scale(1, 0.01);
    -webkit-transform: scale(1, 0.01);
    -ms-transform: scale(1, 0.01);
    -moz-transform: scale(1, 0.01);
    -o-transform: scale(1, 0.01);
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    opacity: 1;
  }
  30% {
    transform: scale(1, 0.01);
    -webkit-transform: scale(1, 0.01);
    -ms-transform: scale(1, 0.01);
    -moz-transform: scale(1, 0.01);
    -o-transform: scale(1, 0.01);
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    opacity: 0;
  }
  31% {
    transform: scale(1, 0.01);
    -webkit-transform: scale(1, 0.01);
    -ms-transform: scale(1, 0.01);
    -moz-transform: scale(1, 0.01);
    -o-transform: scale(1, 0.01);
    transform-origin: 50% 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    opacity: 0;
  }
  50% {
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform-origin: 50% 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    -moz-transform-origin: 50% 0;
    -o-transform-origin: 50% 0;
    opacity: 1;
  }
  100% {
    transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    transform-origin: 50% 100%;
    -webkit-transform-origin: 50% 100%;
    -ms-transform-origin: 50% 100%;
    -moz-transform-origin: 50% 100%;
    -o-transform-origin: 50% 100%;
    opacity: 1;
  }
}
.group .page1 .txt {
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  text-align: center;
  bottom: 0px;
  font-size: 12px;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
}
.group .page2 .txt {
  font-size: 16px;
  line-height: 29px;
  color: #5f6464;
  padding: 48px 20px 24px;
  margin: 0;
  text-align: center;
}
.group .page2 .txt .m {
  display: block;
}
.group .page2 .detail_list {
  width: 100%;
  height: 180px;
  position: relative;
  margin-bottom: 32px;
}
.group .page2 .detail_list img {
  position: absolute;
  width: 240px;
  height: 180px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.group .page2 .detail_list p {
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 24px;
  margin: 0;
  color: #fff;
  font-family: MRTB;
}
.group .page2 .van-popup {
  padding: 20px;
  width: 80%;
  height: 70%;
  overflow: scroll;
}
.group .page3 {
  width: 100%;
  height: auto;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #fbfbfb;
}
.Group_Page3_Swipe {
  margin-top: 32px;
  margin-bottom: 12px;
  margin-left: 24px;
  margin-right: 24px;
}
.Group_Page3_Swipe .year .history-title {
  padding-top: 0px;
  margin-bottom: 12px;
  font-size: 24px;
  line-height: 36px;
  font-family: "TencentSansw7";
  padding-bottom: 8px;
  border-bottom: 1px solid #d8d9dc;
  color: #2a2e2e;
}
.Group_Page3_Swipe .year .li {
  margin-bottom: 12px;
  line-height: 25px;
  font-size: 14px;
}
.Group_Page3_Swipe .year .li .left {
  float: left;
  width: 40px;
  padding-right: 10px;
  text-align: right;
}
.Group_Page3_Swipe .year .li .right {
  float: right;
  width: 230px;
}
.Group_Page3_Swipe .year .li .both {
  clear: both;
}
.Group_Page3_Swipe .van-swipe__indicators {
  display: none;
}
.Group_Page4_Swipe {
  margin-top: 32px;
  padding-bottom: 12px;
  margin-left: 24px;
  margin-right: 24px;
}
.Group_Page4_Swipe .van-swipe-item {
  height: 200px;
  text-align: center;
}
.Group_Page4_Swipe .van-swipe__indicators {
  display: none;
}
</style>
