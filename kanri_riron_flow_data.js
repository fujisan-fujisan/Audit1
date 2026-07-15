// ============================================================================
// 管理会計論（理論）ロジカルフロー学習 — データ
// 出典: 「管理会計論 論文対策集－理論①」第1章 費目別計算・製造間接費
// 各問題の "logical flowchart" を、問題文→ロジカルフローの各ノード（無色/青/赤）
// →分岐→（分岐がある場合は自動で全分岐を順番に）→キーワード、という構造で保持する。
//
// ノードの色は原著の解答フローチャート内でマーカーが引かれている箇所のみを反映する
// （色分けの意味づけ: 赤＝結論・重要度高、青＝結論に至る前提・根拠、無色＝連結する文章で
// 暗記対象ではなく自動表示）。1-1・1-4 は原著ページから起こした実データ、それ以外は
// 目次に基づくプレースホルダー（ready:false）で、今後のページ分の書き起こしを待つ。
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
    question: "",
    keywords: [],
    ready: false,
    flow: [],
  },
  {
    id: "1-3",
    chapterId: "ch1",
    no: "問題1-3",
    title: "継続記録法のメリット",
    importance: "B",
    typical: "A",
    question: "",
    keywords: [],
    ready: false,
    flow: [],
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
  { id: "1-5", chapterId: "ch1", no: "問題1-5", title: "費目別計算における予定価格等の適用", importance: "B", typical: "A", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-6", chapterId: "ch1", no: "問題1-6", title: "予定消費価格と予定受入価格の比較", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-7", chapterId: "ch1", no: "問題1-7", title: "望ましい消費賃率", importance: "C", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-8", chapterId: "ch1", no: "問題1-8", title: "定時外作業手当の会計処理", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-9", chapterId: "ch1", no: "問題1-9", title: "製造間接費の配賦基準の選択", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-10", chapterId: "ch1", no: "問題1-10", title: "製造間接費実際配賦の問題点", importance: "A", typical: "A", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-11", chapterId: "ch1", no: "問題1-11", title: "製造間接費正常配賦の理論", importance: "B", typical: "C", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-12", chapterId: "ch1", no: "問題1-12", title: "基準操業度の選択", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-13", chapterId: "ch1", no: "問題1-13", title: "製造間接費予算の種類", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-14", chapterId: "ch1", no: "問題1-14", title: "固定予算の問題点", importance: "A", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-15", chapterId: "ch1", no: "問題1-15", title: "公式法変動予算の限界", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-16", chapterId: "ch1", no: "問題1-16", title: "操業度差異の計算方法", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-17", chapterId: "ch1", no: "問題1-17", title: "操業度差異分析の検討", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-18", chapterId: "ch1", no: "問題1-18", title: "有利な操業度差異の解釈", importance: "A", typical: "C", question: "", keywords: [], ready: false, flow: [] },
  { id: "1-19", chapterId: "ch1", no: "問題1-19", title: "操業度差異の理論的会計処理", importance: "B", typical: "B", question: "", keywords: [], ready: false, flow: [] },
];
