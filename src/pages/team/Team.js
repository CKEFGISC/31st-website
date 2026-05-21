import $ from "jquery";
import React from "react";

import "./Team.scss";

import Person from "./components/Person";

// checkbox switch event need this
import { handleFadeIn } from "../../utils/Page";

//const BIG_NUMBER = "702979273748788561023828811632351765619418948204951716751044859391766269368417321919644936546061555949748712368781837277474634386402739118846583336337409363900865145594901041246645007199701717682294346964373698129456438546974895533606498957350545832328822294619399692278455262677156168521453671056689920172508533965738965776865773493799207379975906523643632030667992549526575726490217019336849105209266570856929710749483766339143690775407360908876679537050518650063688496786612362800231159815021852348938112947088118678895212639723353322971464522519415278509139608178459623135858561642681375378649993609916088857044885371359176262330047471990021291305961537286123217309528106262800249359576151834525163980064241960106138688756979662768735425368971367758215635783919275006972684312967333219427914808733022808966392989004913181682388838421646536264059803755258490775930855944613760430345879936328260776197273459692909323539077478614534088537502503803233941869002613478333268861721561220521991447559265604693470416474715326202780671526614137008595862618877231367641294457955994930586773196867172422446111564270457526946306317811584571392287543486005773380446187469510215292589111006438756458781648770050294171508655742716072153351946773889761554571968018125177125174760771196165927659922851601398501233834044825534552406485559380063201254686606005563001130030104365934523061909623343181912714637523625885723065775302054126813534059811972779461353200373503409446676099840440743823444770374964508867267345343203118298108532764115480073686373157276194373127894846041616661712482403271032950371289231851877623552279164147958451508850501208440907527029199188694281279980724221338019868720040353053898971061770257377492597505130740826683549121909708212742713649245878255704147406938172379181900575836057029729265870386237447910610481828904113864779086903420491786086040411369478482707097933440540064723271248161532362985248103112419716549790338590707595044318140376317549911070671513410960937987053882932994534631832954355575085969907033551391003675238403600979317232391983227260453339997398309511027861889157686989412741522784918669820741662171384098605405816227272845739385631850926669596020723363559106667584527091246073521329099386677848729962177976264110553479157982064223790453598800263074185608195268493017982137017065549620396283318273888501737943";

/*function Up(props) {
  return (<sup><small>{props.children}</small></sup>)
}*/

function TeamContainer(props) {
  return (
    <div className="container d-flex flex-column align-items-center">{props.children}</div>
  );
}

function setAnchorHeightBy(selector) {
  let anchorElement = $(".team-section-anchor");
  let referenceElement = $(selector);

  anchorElement.css("height", referenceElement.height());
}

function onSwitch() {
  function setClass(selector, method, className) {
    $(selector)[method](className);
  }

  let forceClass = (selector, className, exist) =>
    setClass(selector, exist ? "addClass" : "removeClass", className);

  let isFgisc = $("input#is-fgisc").is(":checked");

  forceClass("#team-ckeisc, #team-fgisc", "shift-left", isFgisc);

  forceClass("#team-ckeisc", "inactive",  isFgisc);
  forceClass("#team-fgisc",  "inactive", !isFgisc);

  setAnchorHeightBy(isFgisc ? "#team-fgisc" : "#team-ckeisc");

  handleFadeIn();
}

function onAnchorAppear() {
  onSwitch();
  window.addEventListener("resize", onSwitch);
}

export default function Team() {
  return (<>
    <section id="title-bar">
      幹部介紹
    </section>
    <section id="team-switcher">
      <div className="d-flex flex-column align-items-center">
        <label className="team-toggle-switch nolabel" onClick={null}>
          <input type="checkbox" id="is-fgisc" onChange={onSwitch} />
          <a href="#/team" className="switch-rect">&#8203;</a>
          <span>
            <span className="left-span">建電</span>
            <span className="right-span">北資</span>
          </span>
        </label>
      </div>
    </section>
    <div className="team-section-anchor" onLoad={onAnchorAppear}>
      <section id="team-ckeisc" className="team-section active">
        <TeamContainer>
          
          <Person
            role="社長"
            name="國 llama"
            tags="排球少年, 鼓手, 電神"
            description={`
數資班的大電神。

貌似一頭羊駝，所以被叫「llama」。

平時有空就會去打排球，也正在學日文跟畫畫。
            `}
            imgSrc="/images/team/ckeisc/Formal/michael.jpg"
            imgSrc2="/images/team/ckeisc/Informal/michael.png"
          />

          <Person
            role="副社長"
            name="一拳"
            tags="難笑, 爛梗王"
            description={`
會下西洋棋、會彈吉他，還報考了日文N3，是一位多才多藝的大電神。

聽過的歌非常廣泛，包含中、日、英等各種語言。
            `}
            imgSrc="/images/team/ckeisc/Formal/onepunch.jpg"
            //imgSrc2="/images/team/ckeisc/Informal/"
          />

          <Person
            role="學術長"
            name="Eating"
            tags="街友, 髮型師, 情緒穩定"
            description={`
科學班的大電神，個性隨和，脾氣極佳。

喜歡寫程式，尤其是網頁開發設計，常常一寫就是好幾個小時。

擔任電研、航空與班聯三個社團的幹部，是極為罕見的三幹王，常常和蜜蜂一樣忙碌。
              `}
            imgSrc="/images/team/ckeisc/Formal/eating.jpg"
            //imgSrc2="/images/team/ckeisc/Informal/"
          />

          <Person
            role="學術"
            name="Boron"
            tags="音遊, 電神, 不加空白, 硼砂"
            description={`
是一個喜歡打音遊跟寫程式的大電神，不只寫程式會電人，打音遊也會電人。

程式都不打空格（譴責），音遊都不拆直接扛(然後爆炸，但還是個大電神)。

有時也會研究一些演算法，然後腦袋爆炸。文科特爛。總而言之，硼砂是一個大電神。
              `}
            imgSrc="/images/team/ckeisc/Formal/boron.jpg"
            //imgSrc2="/images/team/ckeisc/Informal/"
          />

          <Person
            role="學術"
            name="Roy"
            tags="社恐, 競賽程式電神, 死線大師"
            description={`
是一個內向的人，但是跟熟的人就會很吵，有時候會做出自己無法理解的怪事。

興趣是程式&音樂。會音遊，也會競程，也會數學，也會資安，也會做專案的大電神。技能樹豐富。建中大電神。

最厲害的就是競程&演算法，會 c++ & python ，其他也都精通。大括號不換行，assign 和 arguments 中間要加空格，空格縮排。
              `}
            imgSrc="/images/team/ckeisc/Formal/roy.jpg"
            imgSrc2="/images/team/ckeisc/Informal/roy.jpg"
          />

          <Person
            role="學術 & 網管"
            name="Benny"
            tags="雜食性動物, 跳槽, 音遊佬, 路人臉"
            description={`
保有學習的熱忱，不斷地接受各種奇異的新知。

雖然初次見面會有點害羞，也不喜歡用discord以外的社群軟體，班尼其實是一個外向的活潑男孩，喜歡講各種不可理喻的高深言論與幽默言詞。

喜歡 Minecraft 模組開發、把 Rust 當腳本寫以及關在房間裡寫 Ricing 

明明會整理電腦桌面，卻不會整理書桌的桌面。
              `}
            imgSrc="/images/team/ckeisc/Formal/benny.jpg"
            //imgSrc2="/images/team/ckeisc/Informal/"
          />

          <Person
            role="學術 & 網管"
            name="Windsor"
            tags="學姊, 飛機迷, 貓, 小鯊鯊"
            description={`
一隻吸貓吸到上癮的貓，吸到決定從一個低能的臭人類變成一隻貓，曾經被丟到烤箱裡享用。

有空的時候會玩飛行模擬器，是一個莫名冷門的興趣。

溫莎被公認為建北電資學術幹部裡學術力最不足的冗員，也是一個拖延成性、完全沒在做事的網管。

因為完全沒有學習的能力，溫莎連演算法都不會，聽了一整學期的機器學習課也沒學到半點東西，社展時只能在AI的幫助下用HTML、CSS以及javascript完成一個網頁版的彩地雷遊戲。
              `}
            imgSrc="/images/team/ckeisc/Formal/windsor.jpg"
            imgSrc2="/images/team/ckeisc/Informal/windsor.jpeg"
          />

          <Person
            role="衛生 & 總務"
            name="Takora"
            tags="番茄醬加水餃, 小粉紅大冒險, 綿羊, 女裝"
            description={`
Takora是一隻可愛(?)的綿羊，在Instagram上特別的活躍，如果限時動態的數量少於十則，那就代表他的帳號一定被盜了。

Takora有一個較為特殊的痞好，那就是製作與品嚐地獄料理。根據其本人所言，他「喜歡嘗試一些特（ㄒㄧㄝˊ）別（ㄐㄧㄠˋ）的食物，例如白飯加抹茶粉、水餃加番茄醬等，並不純粹像是咖哩拌不拌、火鍋加不加芋頭這種問題，而是多種人神共憤的料理。」曾經因為在建中熱食部的水餃上加早餐部的番茄醬被建北電資全員炎上，是一個名副其實的不良宗教份子。

另外，一生若沒見過Takora穿女裝，就好像錯過了世上最荒謬又最華麗的瞬間；那份衝擊與歡樂，簡直能定義「活過」的意義。
              `}
            imgSrc="/images/team/ckeisc/Formal/takora.jpg"
            //imgSrc2="/images/team/ckeisc/Informal/"
          />

          <Person
            role="總務"
            name="Brandon"
            tags="可愛, 精神很好, 怪物"
            description={`
Brandon是一位 C# 和 Unity 高手，也會寫C++。

雖然Brandon的個性比較內向，他卻常常抱持著熱情洋溢的精神，是一個可愛的陽光大男孩。

愛玩教室電腦，不是學術結果還要教社課(果真是超級大電神) 愛玩gd 可以在學校爬牆上三樓（太厲害了！）
            `}
            imgSrc="/images/team/ckeisc/Formal/brandon.jpg"
            imgSrc2="/images/team/ckeisc/Informal/brandon.jpeg"
          />

          <Person
            role="文書 & 公關"
            name="葉子"
            tags="文言文大師, 相聲, 皇帝, 文組"
            description={`
葉子是一個很愛笑的人，很喜歡地獄哏跟諧音哏，平常的興趣是看書跟打傳說。

再說學業方面，最喜歡的科目是國文，偶像是李白。而由於數學跟自然實在是太爛了，所以毫不猶豫地選擇了文組。
            `}
            imgSrc="/images/team/ckeisc/Formal/et.jpg"
            imgSrc2="/images/team/ckeisc/Informal/et.jpeg"
          />

          <Person
            role="公關 & 美宣"
            name="虛無裂德"
            tags="開心果, 喜歡寶可夢, 假面騎士, 會寫Scratch"
            description={`
虛無裂德，取這個名字源自寶可夢虛吾伊德，具體原因也不知道為什麼反正就這樣了。你也可以叫他咻裂德。

選了理組和加了電研，但資訊榮獲補考。會寫scratch等各種程式語言，想學unity和朋友做遊戲。由此可知，他是一個大電神。

很外向的人，喜歡打瓦和荒野，也滿喜歡講話的。
            `}
            imgSrc="/images/team/ckeisc/Formal/ntncg.jpg"
            imgSrc2="/images/team/ckeisc/Informal/ntncg.jpeg"
          />

        </TeamContainer>
      </section>

      <section id="team-fgisc" className="team-section">
        <TeamContainer>

          <Person
            role="社長"
            name="Claire"
            tags="萊爾富, 數專狗, 一六馬麻, 留下來陪我"
            description={`
克萊爾實在是太富了所以進化成了克萊爾富。

身兼數專狗及一六馬麻的他時常忙得不可開交。

最喜歡粗大Band的留下來陪我。
            `}
            imgSrc="/images/team/fgisc/Formal/claire.jpg"
            imgSrc2="/images/team/fgisc/Informal/claire.jpeg"
          />

          <Person
            role="副社長 & 公關"
            name="阿桃"
            tags="很多女朋友但很專情, 烏薩奇怪叫, 隨地大小睡, 不是給"
            description={`
平時不是在烏薩奇怪叫就是在隨地大小睡。

有很多女友但很專情的喜歡k……，由此可知他不是給。
            `}
            imgSrc="/images/team/fgisc/Formal/taozyii.jpg"
            //imgSrc2="/images/team/fgisc/Informal/"
          />

          <Person
            role="公關長"
            name="阿睿"
            tags="睡覺, 細狗, 吉娃娃, 噪音污染"
            description={`
整天喊累甚至帶眼罩來學校的人。

還是不承認自己是細狗的細狗。

平常在哪裡都很吵，是一個噪音污染的吉娃娃。
            `}
            imgSrc="/images/team/fgisc/Formal/aray.jpg"
            imgSrc2="/images/team/fgisc/Informal/aray.jpg"
          />

          <Person
            role="學術長"
            name="Suzy"
            tags="多才多藝, 充實, 路痴, eye contact"
            description={`
多才多藝的Suzy是個大忙人，感覺生活很充實。

跟他講話時會給你滿滿的eye contact 與尊重。

這麼厲害的Suzy卻是一個路痴，想不到吧，這世界上還有Suzy不會的事~
            `}
            imgSrc="/images/team/fgisc/Formal/suzy.jpg"
            imgSrc2="/images/team/fgisc/Informal/suzy.jpeg"
          />

          <Person
            role="學術"
            name="Children"
            tags="資安電神, 小孩, 劇本家, 貼臉開大"
            description={`
小孩，人如其名，心靈非常純潔。

是位資安電神也是名劇本家，各式RPG和假案皆是出自他手。

會拿著手機對別人貼臉開(ㄎㄨㄤˊ)大(ㄆㄞ)
            `}
            imgSrc="/images/team/fgisc/Formal/children.jpg"
            imgSrc2="/images/team/fgisc/Informal/children.jpg"
          />

          <Person
            role="學術"
            name="水餃"
            tags="看起來不太聰明的樣子, 臉盲, 鯊鯊, 張10"
            description={`
水餃本名張10，二進位學得好都知道這讀作張二。

看起來不太聰明但實際上卻是數資班的大電神。

是個大臉盲。熱愛鯊鯊。
            `}
            imgSrc="/images/team/fgisc/Formal/dumpling.jpg"
            imgSrc2="/images/team/fgisc/Informal/dumpling.jpeg"
          />

          <Person
            role="學術 & 文書"
            name="夜雨"
            tags="傲嬌, 高冷, 抽象, 極i"
            description={`
學姊感覺好高冷喔，但其實他不是不想理你啦只是他極I又很傲嬌。

但熟起來後有時講話突然很抽象，算是一個可愛的反差吧。
            `}
            imgSrc="/images/team/fgisc/Formal/yeyu.jpg"
            //imgSrc2="/images/team/fgisc/Informal/"
          />

          <Person
            role="文書長"
            name="高高"
            tags="I人微E, 想睡覺, 手感很好, 咖波"
            description={`
明明是I人，學姊怎麼越來越E了呢？

整天想睡覺，很喜歡咖波。

是一隻手感很好的大貓咪。
            `}
            imgSrc="/images/team/fgisc/Formal/ruiyu.jpg"
            imgSrc2="/images/team/fgisc/Informal/ruiyu.jpg"
          />

          <Person
            role="文書 & 總務"
            name="小言"
            tags="畫畫超強, 我有沒有讀, 一人世界, 漫畫"
            description={`
問他考試有沒有讀他都會回「我也沒有讀」，事實證明他都偷捲。

喜歡漫畫的小言是個畫畫大師，時常沉浸在自己的一人世界。
            `}
            imgSrc="/images/team/fgisc/Formal/xiaoyan.jpg"
            imgSrc2="/images/team/fgisc/Informal/xiaoyan.jpeg"
          />

        </TeamContainer>
      </section>
    </div>
  </>);
}
