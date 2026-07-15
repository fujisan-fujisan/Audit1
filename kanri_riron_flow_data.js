// ============================================================================
// 管理会計論（理論）ロジカルフロー学習 — データ
// 出典: 「管理会計論 論文対策集－理論①」第1章 費目別計算・製造間接費
// 各問題の "logical flowchart" を、問題文→ロジカルフローの各ノード（無色/青/赤）
// →分岐→（分岐がある場合は自動で全分岐を順番に）→キーワード、という構造で保持する。
//
// ノードの色は原著の解答フローチャート内でマーカーが引かれている箇所のみを反映する
// （色分けの意味づけ: 赤＝結論・重要度高、青＝結論に至る前提・根拠、無色＝連結する文章で
// 暗記対象ではなく自動表示）。1-1〜1-15 は原著ページから起こした実データ、1-16〜1-19 は
// 目次に基づくプレースホルダー（ready:false）で、該当ページ入手後の書き起こしを待つ。
//
// flow の要素は次の2種類のみ:
//   { kind:'node', color:'plain'|'blue'|'red', text:'...' }
//   { kind:'branch', paths:[ [node,...], [node,...], ... ] }   // 各pathを自動で順番に辿り、
//                                                                pathの間に区切り(divider)が入る
// ============================================================================

const RONRI_CHAPTERS = [
  { id: "ch1", name: "第1章 費目別計算・製造間接費", order: 1 },
];

const RONRI_PROBLEMS = [
  {
    id: "1-1",
    chapterId: "ch1",
    no: "問題1-1",
    title: "購入原価に算入する材料副費の範囲",
    importance: "C",
    typical: "A",
    question: "材料副費を２つに分類し，材料の購入原価に算入する材料副費の範囲について，我が国の「原価計算基準」に準拠して説明しなさい。",
    keywords: ["購入代価", "引取費用", "内部材料副費"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "材料副費＝材料が出庫可能となるまでの付随費用" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "plain", text: "企業外部で発生" },
            { kind: "node", color: "plain", text: "引取費用" },
          ],
          [
            { kind: "node", color: "plain", text: "企業内部で発生" },
            { kind: "node", color: "plain", text: "内部材料副費" },
          ],
        ],
      },
      { kind: "node", color: "plain", text: "「原価計算基準」における購入原価の計算方法\n（①〜③の選択適用）" },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "plain", text: "① 購入原価＝購入代価＋引取費用" }],
          [{ kind: "node", color: "plain", text: "② 購入原価＝購入代価＋引取費用＋内部材料副費の一部" }],
          [{ kind: "node", color: "plain", text: "③ 購入原価＝購入代価＋引取費用＋内部材料副費の全部" }],
        ],
      },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "red", text: "引取費用は必ず算入" }],
          [{ kind: "node", color: "red", text: "内部副費は不算入が認められる" }],
        ],
      },
    ],
  },
  {
    id: "1-2",
    chapterId: "ch1",
    no: "問題1-2",
    title: "購入原価に算入しない材料副費の処理",
    importance: "C",
    typical: "B",
    question: "材料の購入原価に内部材料副費を含めないことが認められる理由を２つあげ，それぞれに対応して認められる原価計算上の処理を，我が国の「原価計算基準」に準拠して説明しなさい。",
    keywords: ["特定材料", "恣意的", "間接経費", "検収後（入庫後）", "出庫材料", "材料費"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "一部の内部材料副費の特徴" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "特定材料に跡付け困難\n（EX. 材料倉庫の減価償却費）" },
            { kind: "node", color: "red", text: "購入原価に算入すれば\n計算が恣意的なものとなる" },
          ],
          [
            { kind: "node", color: "blue", text: "材料検収後（入庫後）に発生\n（EX. 整理費，手入れ費，保管費）" },
            { kind: "node", color: "red", text: "購入材料よりも\nむしろ出庫材料に関連" },
          ],
        ],
      },
      { kind: "node", color: "plain", text: "購入原価に算入しない材料副費（内部材料副費）の処理" },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "red", text: "間接経費として処理" }],
          [{ kind: "node", color: "red", text: "材料費に配賦" }],
        ],
      },
    ],
  },
  {
    id: "1-3",
    chapterId: "ch1",
    no: "問題1-3",
    title: "継続記録法のメリット",
    importance: "B",
    typical: "A",
    question: "材料の実際消費量の計算方法には継続記録法と棚卸計算法があるが，継続記録法のメリットについて，棚卸計算法と比較して説明しなさい。",
    keywords: ["払出記録", "帳簿残高", "実地棚卸", "棚卸減耗", "会計管理"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "red", text: "継続記録法" },
            { kind: "node", color: "blue", text: "払出記録を行う" },
            { kind: "node", color: "red", text: "常に帳簿残高が明らか" },
            { kind: "node", color: "red", text: "実地棚卸により" },
            { kind: "node", color: "red", text: "棚卸減耗を把握可能" },
            { kind: "node", color: "plain", text: "材料の会計管理が可能" },
          ],
          [
            { kind: "node", color: "red", text: "棚卸計算法" },
            { kind: "node", color: "blue", text: "払出記録を行わない" },
            { kind: "node", color: "red", text: "帳簿残高は不明" },
            { kind: "node", color: "red", text: "実地棚卸をしても" },
            { kind: "node", color: "red", text: "棚卸減耗を把握不可能" },
            { kind: "node", color: "plain", text: "材料の会計管理が不可能" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-4",
    chapterId: "ch1",
    no: "問題1-4",
    title: "個別法の適用",
    importance: "C",
    typical: "C",
    question: "材料の実際消費価格の計算方法のうち，最も正確な方法として個別法がある。現代の技術環境を踏まえて，個別法の適用可能性と適用対象について検討しなさい。",
    keywords: ["ＩＴ技術", "費用対効果", "価格変動", "偶然性"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "ＩＴ技術の発展" },
      { kind: "node", color: "plain", text: "個別法の適用可能性は高まっている" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "全ての材料に適用" },
            { kind: "node", color: "red", text: "費用対効果の観点から問題あり" },
          ],
          [
            { kind: "node", color: "blue", text: "価格変動下で適用" },
            { kind: "node", color: "red", text: "原価計算に偶然性が混入\n（製品原価の比較可能性を阻害）" },
          ],
        ],
      },
      { kind: "node", color: "red", text: "適用対象は重要かつ価格変動のあまりない材料に限定すべき" },
    ],
  },
  {
    id: "1-5",
    chapterId: "ch1",
    no: "問題1-5",
    title: "費目別計算における予定価格等の適用",
    importance: "B",
    typical: "A",
    question: "実際原価の費目別計算において，予定価格等を適用することによるメリットと留意点を説明しなさい。",
    keywords: ["実際価格", "計算の迅速化", "偶然的変動", "比較可能性の確保", "価格差異", "僅少"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "予定価格等の適用\n（実際原価＝予定価格等×実際消費量）" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "実際価格の計算を待たずに\n実際原価の計算が可能" },
            { kind: "node", color: "red", text: "製品原価の計算の迅速化\n（メリット①）" },
          ],
          [
            { kind: "node", color: "blue", text: "実際価格の偶然的な変動の\n影響を排除可能" },
            { kind: "node", color: "red", text: "製品原価の比較可能性の確保\n（メリット②）" },
          ],
        ],
      },
      { kind: "node", color: "plain", text: "予定価格等が不適当であれば多額の原価差異が発生" },
      { kind: "node", color: "plain", text: "もはや真実の原価とはいえない" },
      { kind: "node", color: "red", text: "価格差異をなるべく僅少にするように予定価格等を定める必要\n（留意点）" },
    ],
  },
  {
    id: "1-6",
    chapterId: "ch1",
    no: "問題1-6",
    title: "予定消費価格と予定受入価格の比較",
    importance: "B",
    typical: "B",
    question: "我が国の「原価計算基準」によれば，材料の購入原価は，原則として実際の購入原価とするが，必要ある場合には，予定価格等をもって計算することができるとしている。そこで，材料の購入原価を予定価格等をもって計算する場合，消費価格を予定価格等をもって計算する場合と比較して，追加されるメリットを２つあげなさい。",
    keywords: ["材料元帳", "数量記録", "記帳の簡略化", "購入材料", "価格差異", "購買管理"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "材料の消費価格を予定価格等をもって計算" },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "plain", text: "材料元帳において\n実際消費価格の計算が必要" }],
          [{ kind: "node", color: "plain", text: "出庫材料の価格差異を\n月末に一括的に把握" }],
        ],
      },
      { kind: "node", color: "plain", text: "材料の購入原価を予定価格等をもって計算" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "材料元帳は\n数量記録のみで足りる" },
            { kind: "node", color: "red", text: "記帳の簡略化\n（メリット①）" },
          ],
          [
            { kind: "node", color: "blue", text: "購入材料の価格差異を\nその都度把握" },
            { kind: "node", color: "red", text: "購買管理に資する情報提供\n（メリット②）" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-7",
    chapterId: "ch1",
    no: "問題1-7",
    title: "望ましい消費賃率",
    importance: "C",
    typical: "B",
    question: "直接工の消費賃率は，個別賃率，職種別平均賃率，工場全体の平均賃率（総平均賃率）の３つに分類されるが，原価計算上いずれの消費賃率が最も望ましいかを，理由を付して説明しなさい。",
    keywords: ["経済性", "偶然性", "比較可能性", "職種別の賃率の相違", "正確性"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "plain", text: "個別賃率の適用" },
            { kind: "node", color: "plain", text: "厳密な計算が可能" },
            { kind: "node", color: "red", text: "計算が極めて煩雑" },
            { kind: "node", color: "red", text: "原価計算に偶然性が混入" },
            { kind: "node", color: "red", text: "経済性と比較可能性に問題" },
          ],
          [
            { kind: "node", color: "plain", text: "総平均賃率の適用" },
            { kind: "node", color: "plain", text: "計算は簡略化される" },
            { kind: "node", color: "red", text: "職種別の賃率の相違を製品原価に反映できない" },
            { kind: "node", color: "red", text: "正確性に問題" },
          ],
        ],
      },
      { kind: "node", color: "red", text: "職種別の平均賃率が最も望ましい" },
    ],
  },
  {
    id: "1-8",
    chapterId: "ch1",
    no: "問題1-8",
    title: "定時外作業手当の会計処理",
    importance: "B",
    typical: "B",
    question: "直接工の定時外作業手当を別建てで処理する場合，これを直接労務費として処理するか，間接労務費として処理するかが問題となるが，それぞれどのような場合に当該処理を採用するのが適切であるのかを説明しなさい。",
    keywords: ["定時外作業を行った原因", "特定製品", "偶然性"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "定時外作業手当を別建てで処理する場合" },
      { kind: "node", color: "plain", text: "定時外作業を行った原因に応じて処理すべき" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "plain", text: "定時外作業を予定していない場合" },
            { kind: "node", color: "plain", text: "特定製品に原因あり\n（他の製品は無関係）" },
            { kind: "node", color: "red", text: "直接労務費として処理" },
          ],
          [
            { kind: "node", color: "plain", text: "定時外作業を行うのが通常の場合" },
            { kind: "node", color: "plain", text: "どの製品にも定時外作業を行う可能性あり" },
            { kind: "node", color: "red", text: "特定製品に負担させれば原価計算に偶然性が混入\n（製品原価の比較可能性を阻害）" },
            { kind: "node", color: "red", text: "間接労務費として処理" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-9",
    chapterId: "ch1",
    no: "問題1-9",
    title: "製造間接費の配賦基準の選択",
    importance: "B",
    typical: "B",
    question: "製造間接費の配賦基準の選択に当たっての判断基準について，⑴価値移転的原価計算の場合と⑵価値回収的原価計算の場合に分けて説明しなさい。",
    keywords: ["比例性（相関性）", "配賦基準数値の測定", "経済性"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "red", text: "⑴価値移転的原価計算" },
            { kind: "node", color: "blue", text: "因果関係を重視した計算" },
          ],
          [
            { kind: "node", color: "red", text: "⑵価値回収的原価計算" },
            { kind: "node", color: "blue", text: "原価負担能力に応じた計算" },
          ],
        ],
      },
      { kind: "node", color: "plain", text: "製造間接費の配賦基準選択に当たっての判断基準" },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "red", text: "①間接費発生との比例性（相関性）\n②配賦基準数値測定の経済性" }],
          [{ kind: "node", color: "red", text: "①原価負担能力との比例性\n②配賦基準数値測定の経済性" }],
        ],
      },
    ],
  },
  {
    id: "1-10",
    chapterId: "ch1",
    no: "問題1-10",
    title: "製造間接費実際配賦の問題点",
    importance: "A",
    typical: "A",
    question: "製造間接費の製品別配賦において，実際配賦率を用いて計算することの問題点を２つ指摘しなさい。",
    keywords: ["固定費", "実際操業度", "比較可能性", "種々雑多", "実際発生額", "計算が遅延"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "blue", text: "間接費の多くは固定費" }],
          [{ kind: "node", color: "blue", text: "間接費は種々雑多な費目からなる" }],
        ],
      },
      { kind: "node", color: "plain", text: "実際配賦率（＝実際発生額／実際操業度）を用いて計算" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "月々の実際操業度の増減の影響を受けて配賦率が大きく変動" },
            { kind: "node", color: "red", text: "製品原価の比較可能性を阻害\n（問題点①）" },
          ],
          [
            { kind: "node", color: "blue", text: "実際発生額の集計にかなりの手間と時間を要する" },
            { kind: "node", color: "red", text: "製品原価の計算が遅延\n（問題点②）" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-11",
    chapterId: "ch1",
    no: "問題1-11",
    title: "製造間接費正常配賦の理論",
    importance: "B",
    typical: "C",
    question: "製造間接費正常配賦の理論の内容と論拠を説明しなさい。",
    keywords: ["固定費", "生産能力の維持費", "生産能力の規模", "正常生産量"],
    ready: true,
    flow: [
      { kind: "node", color: "red", text: "外部報告目的の期間損益計算や価格決定のための製品原価" },
      { kind: "node", color: "red", text: "製造間接費は実際配賦ではなく正常配賦により計算すべき" },
      { kind: "node", color: "plain", text: "論拠" },
      { kind: "node", color: "plain", text: "製造間接費の多くは固定費" },
      { kind: "node", color: "blue", text: "固定費の本質は生産能力の維持費" },
      { kind: "node", color: "blue", text: "生産能力の維持費の大きさは生産能力の規模に依存" },
      { kind: "node", color: "blue", text: "生産能力の規模は正常生産量によって規定される" },
      { kind: "node", color: "blue", text: "固定製造間接費は実際生産量ではなく正常生産量と結びついて発生" },
      { kind: "node", color: "red", text: "正常生産量の製品に均等に配賦するのが理論的" },
    ],
  },
  {
    id: "1-12",
    chapterId: "ch1",
    no: "問題1-12",
    title: "基準操業度の選択",
    importance: "B",
    typical: "B",
    question: "現代企業において，基準操業度として実際的生産能力，平均操業度，期待実際操業度のうちいずれを選択するのが望ましいかを，①期間損益計算と②価格決定のそれぞれの観点から説明しなさい。",
    keywords: ["不働能力", "不確実性", "フル操業", "長期安定操業", "配賦率", "厳しい競争環境"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "plain", text: "①期間損益計算の観点\n（原価計算制度）" },
            { kind: "node", color: "blue", text: "現代企業は慢性的に不働能力を抱えている" },
            { kind: "node", color: "blue", text: "不確実性にさらされている" },
            { kind: "node", color: "blue", text: "実際的生産能力や平均操業度を選択" },
            { kind: "node", color: "blue", text: "フル操業や長期安定操業を仮定" },
            { kind: "node", color: "red", text: "配賦率が実態と乖離" },
            { kind: "node", color: "red", text: "製品原価の計算に歪みが生じる" },
            { kind: "node", color: "red", text: "次年度の予測に基づく期待実際操業度が望ましい" },
          ],
          [
            { kind: "node", color: "plain", text: "②価格決定の観点\n（特殊原価調査）" },
            { kind: "node", color: "blue", text: "競争環境は非常に厳しい" },
            { kind: "node", color: "blue", text: "期待実際操業度や平均操業度を選択" },
            { kind: "node", color: "red", text: "配賦率が相対的に高くなる" },
            { kind: "node", color: "red", text: "製品原価や価格も高くなる" },
            { kind: "node", color: "red", text: "競争に勝ち残れない" },
            { kind: "node", color: "red", text: "配賦率が最小となる実際的生産能力が望ましい" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-13",
    chapterId: "ch1",
    no: "問題1-13",
    title: "製造間接費予算の種類",
    importance: "B",
    typical: "B",
    question: "製造間接費の発生予定額を製造間接費予算といい，それは固定予算と変動予算に大別されるが，両者の相違を説明しなさい。",
    keywords: ["発生予定額", "基準操業度", "予定配賦率", "実際操業度", "管理標準"],
    ready: true,
    flow: [
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "red", text: "固定予算" },
            { kind: "node", color: "plain", text: "予算期間において予期される一定の操業度に基づいて算定" },
            { kind: "node", color: "plain", text: "基準操業度における発生予定額" },
            { kind: "node", color: "red", text: "予定配賦率算定の基礎\n（期間損益計算目的）" },
          ],
          [
            { kind: "node", color: "red", text: "変動予算" },
            { kind: "node", color: "plain", text: "予算期間において予期される範囲内の種々の操業度に応じて算定" },
            { kind: "node", color: "plain", text: "実際操業度における発生予定額" },
            { kind: "node", color: "red", text: "製造間接費の管理標準\n（原価管理目的）" },
          ],
        ],
      },
    ],
  },
  {
    id: "1-14",
    chapterId: "ch1",
    no: "問題1-14",
    title: "固定予算の問題点",
    importance: "A",
    typical: "B",
    question: "固定予算を製造間接費の管理標準として使用することの問題点を説明しなさい。",
    keywords: ["基準操業度", "予算差異", "変動費", "実際操業度", "乖離", "原価管理活動の良否"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "固定予算" },
      { kind: "node", color: "blue", text: "基準操業度における製造間接費の発生予定額" },
      { kind: "node", color: "plain", text: "製造間接費の管理標準として使用" },
      {
        kind: "branch",
        paths: [
          [{ kind: "node", color: "blue", text: "基準操業度の選択が予算差異に影響" }],
          [{ kind: "node", color: "blue", text: "変動費の増減を無視" }],
        ],
      },
      { kind: "node", color: "blue", text: "実際操業度が基準操業度から乖離すれば妥当性が低下" },
      { kind: "node", color: "red", text: "原価管理活動の良否を正しく判断できない" },
    ],
  },
  {
    id: "1-15",
    chapterId: "ch1",
    no: "問題1-15",
    title: "公式法変動予算の限界",
    importance: "B",
    typical: "B",
    question: "製造間接費の管理に公式法変動予算を使用する場合の限界について説明しなさい。",
    keywords: ["一次関数", "正常操業圏", "公式", "管理標準", "原価管理活動の良否"],
    ready: true,
    flow: [
      { kind: "node", color: "plain", text: "公式法変動予算" },
      { kind: "node", color: "plain", text: "製造間接費の発生を一次関数（y＝a＋bx）で直線的に予定\n（y：原価，a：固定費額，b：変動費率，x：操業度）" },
      {
        kind: "branch",
        paths: [
          [
            { kind: "node", color: "blue", text: "xが正常操業圏の範囲内" },
            { kind: "node", color: "blue", text: "aやbは一定" },
            { kind: "node", color: "red", text: "公式で算定した予算額に妥当性あり" },
            { kind: "node", color: "red", text: "原価管理活動の良否を正しく判断できる" },
          ],
          [
            { kind: "node", color: "blue", text: "xが正常操業圏の範囲外" },
            { kind: "node", color: "blue", text: "aやbが変化" },
            { kind: "node", color: "red", text: "公式で算定した予算額の妥当性が低下" },
            { kind: "node", color: "red", text: "原価管理活動の良否を正しく判断できない" },
          ],
        ],
      },
    ],
  },
  { id: "1-16", chapterId: "ch1", no: "問題1-16", title: "操業度差異の計算方法", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-17", chapterId: "ch1", no: "問題1-17", title: "操業度差異分析の検討", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-18", chapterId: "ch1", no: "問題1-18", title: "有利な操業度差異の解釈", importance: "A", typical: "C", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-19", chapterId: "ch1", no: "問題1-19", title: "操業度差異の理論的会計処理", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
];
