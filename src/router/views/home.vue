<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout },
}
</script>

<template>
  <Layout>
    <v-content>
      <v-container
        fluid
      >
        <section>
          <v-parallax
            src="/img/background.jpg"
            height="600"
          >
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <img
                src="@assets/images/mc-logo.png"
                alt="Mobile Connect"
                height="200"
              >
              <h1 class="white--text mb-2 display-1 text-xs-center">Mobile Connnect</h1>
              <!--               <div class="subheading mb-3 text-xs-center">by Mobile Connect</div> -->
              <v-btn
                class="green mt-5"
                dark
                large
                round
                href="/login"
              >
                TEL. 06 5895 8328
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>
        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex
              xs12
              md8
              sm4
              class="my-3"
              align-center
            >
              <v-container>
                <v-layout
                  row
                  wrap
                  align-center
                >
                  <v-flex
                    xs12
                  >
                    <h1 class="headline-normal mb-2 display-1 text-xs-center">2 Ways SMS Solution</h1>
                    <div class="headline-normal text-xs-left ">ให้คำปรึกษาและให้บริการเกี่ยวกับ “กิจกรรมการตลาดผ่าน SMS” ในรูปแบบของ 2WAYS SMS อย่างมืออาชีพ มากกว่า 800 แคมเปญต่อปี ที่เราได้ให้บริการอย่างมีประสิทธิภาพ
                    เหมาะสำหรับกิจกรรม<br><br>
                      <v-icon>check_box</v-icon> โหวต <br>
                      <v-icon>check_box</v-icon> ตอบคำถาม<br>
                      <v-icon>check_box</v-icon> ผลสำรวจ<br>
                      <v-icon>check_box</v-icon> ชิงรางวัล<br>
                      <v-icon>check_box</v-icon> ลงทะเบียน<br>
                    <v-icon>check_box</v-icon> เช็คยอดคะแนนสะสม</div>
                    <p/>
                    <h2 class="headline-normal text-xs-center">2WAYS SMS</h2>
                    <div class="thai18 text-xs-left ">คือกิจกรรมการตลาดผ่านทางโทรศัพท์มือถือ สามารถนำมาประยุกต์ใช้ได้กับหลากหลายธุรกิจ สร้างการสื่อสารแบบ SMS Interactive กับกลุ่มเป้าหมาย ช่วยเพิ่มกลุ่มลูกค้าใหม่ รักษาฐานลูกค้าเก่า (Acquire or Retain Customer), สร้างการรับรู้ผลิตภัณฑ์ (Brand Awareness) และเพิ่มรายได้ (Generate Revenue) สร้างความสัมพันธ์ที่ดีระหว่างลูกค้ากับองค์กร</div>
                  </v-flex>  
                </v-layout>
              </v-container>
            </v-flex> 
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout
                  row
                  wrap
                  align-center
                >
                  <v-flex
                    xs12
                    md4
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                        >
                          color_lens
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      >
                        <div class="headline-normal text-xs-center">สร้างสีสันทางการตลาด</div>
                      </v-card-title>
                      <v-card-text>
                        เพิ่มลูกเล่นใหม่ที่ไม่ซ้ำใคร นำมาประยุกต์ใช้ให้เข้ากับธุรกิจที่มีหลากหลายรูปแบบ สร้างภาพลักษณ์ให้ดูทันสมัย ยืดหยุ่นและปรับลูกเล่นให้เหมาะสมตาม Concept ที่ต้องการได้
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                        >
                          flash_on
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      >
                        <div class="headline-normal">กระตุ้นยอดขาย</div>
                      </v-card-title>
                      <v-card-text>
                        ด้วยวิธีการที่ง่ายและน่าสนใจ ทำให้กลุ่มเป้าหมาย มีความพอใจในการร่วมกิจกรรมสูง เกิดการกระตุ้น Brand Loyalty มากขึ้น สามารถวัดผลได้ว่าแคมเปญมีประสิทธิภาพเพียงใด ประหยัดเวลาและลดความยุ่งยากในการจัดแคมเปญ
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex
                    xs12
                    md4
                  >
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon
                          x-large
                          class="blue--text text--lighten-2"
                        >
                          build
                        </v-icon>
                      </v-card-text>
                      <v-card-title
                        primary-title
                        class="layout justify-center"
                      >
                        <div class="headline-normal text-xs-center">รักษาลูกค้าเก่า-เพิ่มลูกค้าใหม่</div>
                      </v-card-title>
                      <v-card-text>
                        สามารถเข้าถึงกลุ่มคนทุกเพศ ทุกวัย ทุกสายอาชีพ ช่วยรักษากลุ่มลูกค้าเก่า-ขยายกลุ่มลูกค้าใหม่ได้ อีกทั้งยังช่วยเก็บข้อมูลเพื่อวิจัยตลาด ทำให้รับรู้ถึงพฤติกรรมและความต้องการของลูกค้า แล้วนำมาพัฒนาสินค้าและบริการในครั้งต่อ ๆ ไป
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>
        <section>
          <v-container 
            fluid 
            grid-list-sm>
            <v-layout>
              <v-flex 
                xs12 
              >
                <v-img
                  src="http://www.mobileconnect.co.th/img/2way_pic01.jpg"
                />
              </v-flex>
            </v-layout>
          </v-container>              
        </section>
        <section>
          <v-container>
            <v-layout
              column
              wrap
              class="my-5"
              align-center
            >
              <v-flex
                xs12
                md8
                sm4
                class="my-3"
              >
                <div class="text-xs-center">
                  <h2 class="headline-normal">ตัวอย่างแคมเปญ 2WAYS SMS</h2>
                  <!--                 <span class="subheading">
                    จากองค์กรและแบรนด์สินค้าดัง ที่เราได้รับความไว้วางใจให้บริการ
                  </span> -->
                </div>
                <div class="thai18 mb-3 text-xs-left ">จากองค์กรและแบรนด์สินค้าดัง ที่เราได้รับความไว้วางใจให้บริการ</div>
              </v-flex>
            </v-layout>
          </v-container>
          <v-flex xs12>
            <v-container grid-list-xl>
              <v-layout
                row
                wrap
                align-center
              >
                <v-flex 
                  xs12
                  md4>
                  <v-img
                    src="http://www.mobileconnect.co.th/img/2way_ads/ex2ways/2waysp01_s.jpg"
                  />
                </v-flex>

                <v-flex 
                  xs12
                  md4>
                  <v-img src="http://www.mobileconnect.co.th/img/2way_ads/ex2ways/2waysp08_s.jpg"/>
                </v-flex>

                <v-flex 
                  xs12
                  md4>
                  <v-img src="http://www.mobileconnect.co.th/img/2way_ads/ex2ways/2waysp03_s.jpg"/>
                </v-flex>
                <v-flex 
                  xs12
                  md4>
                  <v-img
                    src="http://www.mobileconnect.co.th/img/2way_ads/ex2ways/2waysp07_s.jpg"
                  />
                </v-flex>

                <v-flex 
                  xs12
                  md4>
                  <v-img src="http://www.mobileconnect.co.th/img/2way_ads/ex2ways/2waysp06_s.jpg"/>
                </v-flex>

                <v-flex 
                  xs12
                  md4>
                  <v-img src="http://www.mobileconnect.co.th/img/2way_ads/exussd/ussd_p05s.jpg"/>
                </v-flex>
              </v-layout>  
            </v-container>
          </v-flex>       
        </section>         
        <section>
          <v-parallax
            src="/img/technology.jpg"
            height="380"
          >
            <v-layout
              column
              align-center
              justify-center
            >
              <div class="headline-white mb-3 text-xs-center">หากสนใจและต้องการสอบถามข้อมูลเพิ่มเติม ติดต่อฝ่ายขาย</div>
              <em>One Stop Service : เราคือ ผู้นำด้านให้บริการ 2Ways SMS ที่ดีที่สุด</em>
              <v-btn
                class="indigo mt-5"
                dark
                large
                round
                href="/login"
              >
                TEL. 06 5895 8328
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>
        <section>
          <v-container grid-list-xl>
            <v-layout
              row
              wrap
              justify-center
              class="my-5"
            >
              <v-flex
                xs12
                sm4
              >
                <v-card class="elevation-0 transparent">
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Company info</div>
                  </v-card-title>
                  <v-card-text>
                    บริษัท โมบาย คอนเน็ค จำกัด เป็นผู้ให้บริการ Mobile Marketing & CRM แบบครบวงจร ด้วยทีมงานที่มีความ
                    เชี่ยวชาญ และ มีประสบการณ์ให้บริการแก่องค์กรชั้นนำต่าง ๆ ทั้งในประเทศไทย และต่างประเทศ การันตีจากประสบการณ์ 18 ปี
                  </v-card-text>
                  <br>
                  <v-list-tile class="layout justify-center">
                    <v-list-tile-action >
                      <v-flex row>
                      <a href="https://www.facebook.com/MC.MobileConnect/" >
                        <img src="https://img.icons8.com/material/50/6FC2F4/facebook-f.png">
                      </a>  &nbsp;
                      <a href="http://line.me/R/ti/p/%40mobileconnect">
                        <img src="https://img.icons8.com/material/50/6FC2F4/email.png">
                      </a>&nbsp;
                      <a href="http://mobileconnect.co.th/#">
                        <img src="https://img.icons8.com/material/50/6FC2F4/twitter-squared.png">
                      </a>
                      </v-flex>

                    </v-list-tile-action>
                  </v-list-tile>

                </v-card>
              </v-flex>
              <v-flex
                xs12
                sm4
                offset-sm1
              >
                <v-card class="elevation-0 transparent">
                  <v-card-title
                    primary-title
                    class="layout justify-center"
                  >
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-card-text>
                    บริษัท โมบาย คอนเน็ค จำกัด 1111/84 ถนนลาดพร้าว, จันทรเกษม, จตุจักร, กรุงเทพมหานคร 10900
                  </v-card-text>
                  <v-card-text>
                    Mobile Connect Co., Ltd. 1111/84 Ladprao Rd., Chankasem Chatuchak Bangkok 10900
                  </v-card-text>
                  <v-list class="transparent">
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>06 5895 8328</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>กรุงเทพมหานคร, ประเทศไทย</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>info@mobileconnect.co.th</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>

        <v-footer class="green darken-2">
          <v-layout
            row
            wrap
            align-center
          >
            <v-flex xs12>
              <center>
                <div class="white--text ml-3">2018 © Copyright www.sms2mkt.com All Rights Reserved.</div>
              </center>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-container>
    </v-content>
  </Layout>
</template>
