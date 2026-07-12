// ============================================================================
// 経営学 個別問題集 復習管理 — 問題データ
// 出典: CPA会計士講座 経営学 個別問題集（ファイナンス①・②）2026年合格目標
//
// 各問題(item)の rotationLeft は「回転数」欄の左側の数値（時間に余裕がある人向け）
// を採用回数の目標としている。rotationRight は参考として保持するのみ（右側の数値、
// 時間がない人向け）。rotationLeft が null の場合は「回転不要／任意」を意味する。
// ============================================================================

const KEIEI_BOOKS = [
  { id: "finance1", name: "ファイナンス①", order: 1 },
  { id: "finance2", name: "ファイナンス②", order: 2 },
];

// 章（今後の科目追加はこの配列に章を足していく）
const KEIEI_CHAPTERS = [
  { id: "f1-ch1", book: "finance1", name: "1. コーポレート・ファイナンス，財務分析，資金調達，運転資本管理", order: 1 },
  { id: "f2-ch2", book: "finance2", name: "2. インベストメント", order: 2 },
  { id: "f2-ch3", book: "finance2", name: "3. デリバティブ", order: 3 },
  { id: "f2-ch4", book: "finance2", name: "4. ファイナンスに関するその他の論点", order: 4 },
];

function mkItems(problemId, arr) {
  return arr.map(function (it, i) {
    return Object.assign({ id: problemId + "__" + (i + 1) }, it);
  });
}

// キーワードまとめ問題(1-40)用: [番号, 用語, 重要度, 追加論点講義フラグ(1/0)] の配列から items を生成。
// 用語集は演習で「正解」を積み重ねる対象ではなく参照用のため、回転数は null（回転不要／任意）とする。
function buildKeywordItems(problemId, arr) {
  return arr.map(function (row) {
    const num = row[0], term = row[1], imp = row[2], advanced = row[3];
    return {
      id: problemId + "__" + num,
      label: "(" + num + ") " + term,
      imp: imp,
      rotationLeft: null,
      rotationRight: null,
      flags: advanced ? ["追加論点講義"] : [],
    };
  });
}

// difficulty: 難易度 A/B/C/C+ (大問単位)
// items[].imp : 重要度 (表示用の文字列。左右で異なる場合は "A-A" 等そのまま表示)
// items[].rotationLeft / rotationRight : 回転数（左＝採用する目標回数、右＝参考）
// items[].flags : ["キーワード","設例なし","★"] など

const KEIEI_PROBLEMS_FINANCE1 = [
  {
    num: "1-1", ch: "f1-ch1", title: "コーポレート・ファイナンスの目的・企業価値の算定", difficulty: "A",
    items: mkItems("finance1__1-1", [
      { label: "空欄穴埋め（①〜⑨）", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["①②⑥~⑨キーワード"] },
    ]),
  },
  {
    num: "1-2", ch: "f1-ch1", title: "現在価値の算定と配当割引モデル①", difficulty: "A/B",
    items: mkItems("finance1__1-2", [
      { label: "問1", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問3", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問4", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問5", imp: "⑨A-A ⑩B-B", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問6", imp: "⑪A-A ⑫B-B", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-3", ch: "f1-ch1", title: "現在価値の算定と配当割引モデル②", difficulty: "B",
    items: mkItems("finance1__1-3", [
      { label: "問1-①", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問1-②", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 4, rotationRight: 3, flags: ["設例なし", "★"] },
      { label: "問3", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-4", ch: "f1-ch1", title: "企業価値の算定（DCF法①）", difficulty: "A",
    items: mkItems("finance1__1-4", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問2", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問3", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問4", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問5", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問6", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問7", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "1-5", ch: "f1-ch1", title: "企業価値の算定（DCF法②）", difficulty: "B",
    items: mkItems("finance1__1-5", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "1-6", ch: "f1-ch1", title: "修正現在価値法及びEBITDA", difficulty: "B",
    items: mkItems("finance1__1-6", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問4", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-7", ch: "f1-ch1", title: "WACC法，修正現在価値法", difficulty: "B",
    items: mkItems("finance1__1-7", [
      { label: "問1", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2(1)", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2(2)", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2(3)", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2(4)", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "1-8", ch: "f1-ch1", title: "資本コスト総論", difficulty: "A",
    items: mkItems("finance1__1-8", [
      { label: "空欄穴埋め（①〜⑩）", imp: "①~⑧A-B, ⑨⑩B-B", rotationLeft: 2, rotationRight: 1, flags: ["①~⑧キーワード"] },
    ]),
  },
  {
    num: "1-9", ch: "f1-ch1", title: "株主資本コスト", difficulty: "A",
    items: mkItems("finance1__1-9", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-10", ch: "f1-ch1", title: "加重平均資本コスト", difficulty: "A",
    items: mkItems("finance1__1-10", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "1-11", ch: "f1-ch1", title: "資本コストと投資決定", difficulty: "B",
    items: mkItems("finance1__1-11", [
      { label: "単一問題", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-12", ch: "f1-ch1", title: "正味現在価値法", difficulty: "A",
    items: mkItems("finance1__1-12", [
      { label: "問1", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "1-13", ch: "f1-ch1", title: "正味現在価値法，内部収益率法", difficulty: "A",
    items: mkItems("finance1__1-13", [
      { label: "問1(1)", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問1(2)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問1(3)", imp: "①B-B ②C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["①キーワード", "①のみ★"] },
      { label: "問1(4)", imp: "C-C", rotationLeft: null, rotationRight: null, flags: ["1回 or 不要-不要"] },
      { label: "問2", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["①④キーワード", "②③設例なし"] },
      { label: "問4", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "1-14", ch: "f1-ch1", title: "最適資本構成", difficulty: "A",
    items: mkItems("finance1__1-14", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["キーワード", "★"] },
      { label: "問2", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-15", ch: "f1-ch1", title: "MM理論", difficulty: "B",
    items: mkItems("finance1__1-15", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["①②④キーワード"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問4", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-16", ch: "f1-ch1", title: "最適資本構成（MM理論まとめ）", difficulty: "B",
    items: mkItems("finance1__1-16", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2", imp: "C-C", rotationLeft: null, rotationRight: null, flags: ["1回 or 不要-不要", "キーワード"] },
    ]),
  },
  {
    num: "1-17", ch: "f1-ch1", title: "追加論点講義　MM理論（裁定取引）", difficulty: "B",
    items: mkItems("finance1__1-17", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["④⑧以外キーワード"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問3", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "1-18", ch: "f1-ch1", title: "法人税を考慮したMM理論・トレードオフモデル", difficulty: "A",
    items: mkItems("finance1__1-18", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["キーワード", "★"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-19", ch: "f1-ch1", title: "法人税を考慮したMM理論（節税効果）", difficulty: "B",
    items: mkItems("finance1__1-19", [
      { label: "問題1-問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問題1-問2", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問題1-問3", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問題2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-20", ch: "f1-ch1", title: "法人税を考慮したMM理論（株主資本コスト）", difficulty: "C",
    items: mkItems("finance1__1-20", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "⑨キーワード", "★"] },
      { label: "問2", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-21", ch: "f1-ch1", title: "法人税を考慮したMM理論（まとめ），トレードオフモデル（作図）", difficulty: "B",
    items: mkItems("finance1__1-21", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-22", ch: "f1-ch1", title: "ゴードン・モデル", difficulty: "B",
    items: mkItems("finance1__1-22", [
      { label: "空欄穴埋め（①〜⑥）", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "1-23", ch: "f1-ch1", title: "配当政策", difficulty: "A",
    items: mkItems("finance1__1-23", [
      { label: "問1・問2（共通穴埋め①〜⑮）", imp: "①C+-C+ ／他B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問3（ゴードンモデルの記号選択）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-24", ch: "f1-ch1", title: "MMの配当無関連性命題①（配当のみを行うケース）", difficulty: "B",
    items: mkItems("finance1__1-24", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問2", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["①④キーワード", "②③設例なし", "★"] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問4", imp: "(1)B-B (2)B-C+", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-25", ch: "f1-ch1", title: "MMの配当無関連性命題②（配当して投資 or 内部留保して投資）", difficulty: "C",
    items: mkItems("finance1__1-25", [
      { label: "空欄穴埋め（①〜⑥）", imp: "①~④B-B ⑤⑥A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "1-26", ch: "f1-ch1", title: "MMの配当無関連性命題とその批判", difficulty: "B",
    items: mkItems("finance1__1-26", [
      { label: "問1", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-27", ch: "f1-ch1", title: "自己株式の取得", difficulty: "A",
    items: mkItems("finance1__1-27", [
      { label: "空欄穴埋め（①〜⑧）", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "1-28", ch: "f1-ch1", title: "自己株式の取得の経済効果①（自己株式の取得のみのケース）", difficulty: "A",
    items: mkItems("finance1__1-28", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "1-29", ch: "f1-ch1", title: "自己株式の取得の経済効果②（配当 or 自己株式取得）", difficulty: "A",
    items: mkItems("finance1__1-29", [
      { label: "問1", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問4", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "1-30", ch: "f1-ch1", title: "ペイアウト政策（応用問題）", difficulty: "C",
    items: mkItems("finance1__1-30", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2", imp: "A-B", rotationLeft: 3, rotationRight: 2, flags: ["①設例なし", "★"] },
      { label: "問3", imp: "A-A", rotationLeft: 4, rotationRight: 3, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-31", ch: "f1-ch1", title: "税制を考慮した自己株式の取得", difficulty: "C",
    items: mkItems("finance1__1-31", [
      { label: "問1(1)〜(4)", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "(4)①③キーワード", "★"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-32", ch: "f1-ch1", title: "エージェンシー理論（総論）", difficulty: "A",
    items: mkItems("finance1__1-32", [
      { label: "空欄穴埋め（①〜⑧）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "1-33", ch: "f1-ch1", title: "エージェンシー理論", difficulty: "B",
    items: mkItems("finance1__1-33", [
      { label: "問1", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["⑪キーワード"] },
      { label: "問2", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["⑬⑮キーワード"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問4", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "1-34", ch: "f1-ch1", title: "内部留保及びペッキングオーダー理論", difficulty: "B",
    items: mkItems("finance1__1-34", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2(1)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問2(2)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問2(3)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問2(4)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2(5)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "1-35", ch: "f1-ch1", title: "財務分析①", difficulty: "A",
    items: mkItems("finance1__1-35", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["①~④⑧⑨キーワード"] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["①キーワード"] },
      { label: "問4", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問5", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-36", ch: "f1-ch1", title: "株価と株主資本コスト", difficulty: "B",
    items: mkItems("finance1__1-36", [
      { label: "問2(1) 当期末の1株当たり配当額", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2(2) サステイナブル成長率と翌期末配当額", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2(3) 当期首・当期末の株価", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし"] },
      { label: "問2(4) 配当利回り", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2(5) 1年間投資した場合の収益率", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2(6) ROE5%の場合のサステイナブル成長率・株価", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2(7) 配当性向60%の場合のサステイナブル成長率・株価", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問2(8) 空欄①②（配当性向を下げた場合の株価変化）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問3 空欄①②（株主資本コスト・当期首株価の算定）", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "1-37", ch: "f1-ch1", title: "財務分析②", difficulty: "B",
    items: mkItems("finance1__1-37", [
      { label: "問1 インタレスト・カバレッジ・レシオ", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2 固定比率・負債比率", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問3 固定長期適合比率・自己資本比率", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問4 流動比率・当座比率", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問5 ROEのデュポン分解", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問6 棚卸資産回転率・有形固定資産回転率", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問7 PER", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問8 PBR", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問9 サステイナブル成長率・株価・PVGO", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問10 CCC（回転期間）", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問11 ROA", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問12 信用リスク指標・格付け", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["(1)キーワード", "(2)設例なし"] },
    ]),
  },
  {
    num: "1-38", ch: "f1-ch1", title: "財務分析③，その他応用問題", difficulty: "B",
    items: mkItems("finance1__1-38", [
      { label: "問題1（FCF・資本コスト・企業価値，空欄①〜⑦）", imp: "A-A", rotationLeft: 4, rotationRight: 3, flags: ["設例なし", "★"] },
      { label: "問題2（資本構成とROA/ROE・財務レバレッジ，空欄①〜⑧）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["⑧設例なし", "★"] },
      { label: "問題3（財務レバレッジ効果の公式，空欄①〜④）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["②③設例なし"] },
    ]),
  },
  {
    num: "1-39", ch: "f1-ch1", title: "資金調達，棚卸資産管理", difficulty: "A",
    items: mkItems("finance1__1-39", [
      { label: "問1 資金調達源泉（空欄穴埋め）", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2 在庫費用の計算", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "1-40", ch: "f1-ch1", title: "コーポレート・ファイナンス，財務分析，資金調達　キーワードまとめ", difficulty: "A",
    items: buildKeywordItems("finance1__1-40", [
      [1, "株主の富", "A-A"], [2, "キャピタルゲイン", "C+-C+"], [3, "期待収益率", "A-A"], [4, "リスク", "A-A"],
      [5, "リスク資産・危険資産", "A-A"], [6, "無リスク資産・安全資産", "A-A"], [7, "リスク回避的投資家", "A-A"],
      [8, "リスクフリーレート", "A-A"], [9, "リスクプレミアム", "A-A"], [10, "リスク中立的投資家", "C+-C+"],
      [11, "リスク愛好的投資家", "C+-C+"], [12, "配当割引モデル（DDM）", "B-B"], [13, "フリーキャッシュフロー（FCF）", "A-A"],
      [14, "フリーキャッシュフロー理論", "B-B"], [15, "事業価値", "A-A"], [16, "非事業価値", "A-A"],
      [17, "APV法・修正現在価値法", "B-B"], [18, "EBITDA", "A-A"], [19, "EBIT", "A-A"],
      [20, "インカム・アプローチ", "B-C+", 1], [21, "マーケット・アプローチ", "B-C+", 1], [22, "ネットアセット・アプローチ", "B-C+", 1],
      [23, "継続価値・ターミナルバリュー", "B-B"], [24, "残余利益", "C+-C+", 1], [25, "資本コスト", "B-B"],
      [26, "ビジネスリスク", "B-B"], [27, "財務リスク", "B-B"], [28, "貸倒リスク", "B-B"], [29, "信用スプレッド", "B-B"],
      [30, "NPV法", "A-A"], [31, "IRR", "B-B"], [32, "回収期間法", "B-B"], [33, "完全資本市場の仮定", "B-B"],
      [34, "MM理論", "A-A"], [35, "裁定取引・アービトラージ", "A-A"], [36, "一物一価の法則", "B-B", 1],
      [37, "節税効果", "A-A"], [38, "修正MM理論", "A-A"], [39, "トレードオフモデル", "B-B"],
      [40, "期待倒産コスト", "B-B"], [41, "直接的コスト", "B-B"], [42, "間接的コスト", "B-B"],
      [43, "配当性向", "A-A"], [44, "配当利回り", "C+-C+"], [45, "ゴードン・モデル", "A-A"],
      [46, "MMの配当無関連性命題", "A-A"], [47, "自家製配当・ホームメード配当", "B-B"], [48, "情報の非対称性", "A-A"],
      [49, "バードインザハンド仮説", "B-C+"], [50, "残余配当政策", "B-B"], [51, "シグナリング効果・配当", "B-B"],
      [52, "顧客効果", "B-B"], [53, "供給効果", "C+-C+"], [54, "配当のライフサイクル仮説", "B-B"],
      [55, "配当ケータリング仮説", "B-B", 1], [56, "自己株式取得と株価の関係", "A-A"],
      [57, "シグナリング効果・仮説", "B-B"], [58, "EPS", "B-B"], [59, "ペイアウト政策", "B-B"],
      [60, "収益持続性仮説", "B-C+"], [61, "業績連動配当主義", "C+-C+"], [62, "株主資本配当率（DOE）", "B-B", 1],
      [63, "総還元性向", "B-B", 1], [64, "マーケット・タイミング仮説", "B-B", 1], [65, "リントナー仮説", "B-B", 1],
      [66, "エージェンシー関係", "B-B"], [67, "モラルハザード", "B-B"], [68, "アラインメント効果", "B-B"],
      [69, "エントレンチメント効果", "B-B"], [70, "モニタリングコスト", "B-B"], [71, "ボンディングコスト", "B-B"],
      [72, "レジデュアルロス", "B-B"], [73, "リスク・シフティング", "B-B"], [74, "財務制限条項", "B-B"],
      [75, "過小投資問題", "B-B"], [76, "逆選択・アドバースセレクション", "B-B"], [77, "ペッキングオーダー理論", "B-B"],
      [78, "規律付け効果", "B-B"], [79, "オーバーハング問題", "B-B"], [80, "マーケットタイミング理論", "B-B", 1],
      [81, "ROE", "A-A"], [82, "デュポン・システム", "A-A"], [83, "伊藤レポート", "C+-C+", 1], [84, "ROA", "A-A"],
      [85, "財務レバレッジ効果", "A-A"], [86, "ROEの標準偏差とROAの標準偏差の関係", "B-B"],
      [87, "ROIC", "B-B", 1], [88, "ROIC-WACCスプレッド", "B-B", 1], [89, "EVA", "B-B"], [90, "MVA", "B-B"],
      [91, "トービンのQ", "C+-C+"], [92, "PER", "B-B"], [93, "PBR", "B-B"], [94, "PCFR", "C+-C+", 1], [95, "PSR", "C+-C+", 1],
      [96, "サステイナブル成長率", "A-A"], [97, "PVGO", "B-B"], [98, "流動比率", "B-B"], [99, "当座比率", "B-B"],
      [100, "自己資本比率", "B-B"], [101, "BIS規制", "C+-C+", 1], [102, "負債比率", "B-B"],
      [103, "デットエクイティレシオ", "B-B"], [104, "固定比率", "B-B"], [105, "固定長期適合比率", "B-B"],
      [106, "インタレストカバレッジレシオ", "B-B"], [107, "格付け", "B-B"], [108, "売上債権回転率", "B-B"],
      [109, "仕入債務回転期間", "B-B"], [110, "棚卸資産回転率", "B-B"], [111, "有形固定資産回転率", "B-B"],
      [112, "キャッシュ・コンバージョン・サイクル（CCC）", "B-B"], [113, "エクイティ・ファイナンス", "B-B"],
      [114, "デット・ファイナンス", "B-B"], [115, "メザニン・ファイナンス", "B-B"], [116, "直接金融", "B-B"],
      [117, "間接金融", "B-B"], [118, "コマーシャルペーパー", "B-B", 1], [119, "シンジケートローン", "B-B", 1],
      [120, "コミットメントライン", "B-B", 1], [121, "ライツオファリング", "B-B", 1],
      [122, "クラウドファンディング", "C+-C+", 1], [123, "アセットファイナンス", "C+-C+", 1],
      [124, "パリティ", "C+-C+", 1], [125, "パリティ乖離率", "C+-C+", 1],
    ]),
  },
  {
    num: "1-41", ch: "f1-ch1", title: "追加論点講義（比較的重要性の高いもの）", difficulty: "B",
    items: mkItems("finance1__1-41", [
      { label: "問1(1) アップサイド/ダウンサイドリスク", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(2) 正誤判定（FCFを他投資案に充当）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問1(3) 正誤判定（CB/ワラント債の資本コスト）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問1(4) 「レバレッジを効かせる」", imp: "C+-C", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(5) 内部留保の問題点（漢字5文字）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(6) 正誤判定（トービンのQと買収対象）", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["設例なし"] },
      { label: "問2(1) 株主が負担するリスク（カタカナ）", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2(2) 節税効果の帰属先", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2(3) 配当ケータリング仮説", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2(4) 総還元性向・DOE・ROE分解", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問2(5) 自己株式取得と情報優位者の仮説名", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問2(6) リントナー仮説", imp: "B-C+", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問2(7) マーケットタイミング理論", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2(8) B社企業価値の数値算定", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし"] },
      { label: "問3 A社/B社株価・企業価値算定（空欄①〜⑭）", imp: "①~⑧B-B ⑨~⑭C+-C+", rotationLeft: 2, rotationRight: 2, flags: ["①②④キーワード"] },
      { label: "問4 残余利益モデルによる株価算定", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問5 新株発行の株主資本コスト算定", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問6 完全資本市場前提でのL社株主資本コスト算定", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問7 法人税ありの場合のL社株主資本コスト算定", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問8 BIS規制・伊藤レポート等（空欄①〜⑤）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問9 ROIC・ROIC-WACCスプレッド算定", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問10 デット・ファイナンスの種類（空欄①〜③）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問11 公募増資・ライツオファリング・希薄化（空欄①〜③）", imp: "①③C+-C+ ②B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問12 CBのパリティ・パリティ乖離率算定", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "1-42", ch: "f1-ch1", title: "追加論点講義（比較的重要性の低いもの）", difficulty: "C",
    items: mkItems("finance1__1-42", [
      { label: "問1 単利計算による現在価値・将来価値", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: [] },
      { label: "問2 マイナス金利下の債券現在価値算定", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: [] },
      { label: "問3 正誤判定（留保利益の資本コスト）", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["設例なし"] },
      { label: "問4 節税効果の分子FCF・売上高成長率", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["(1)設例なし"] },
    ]),
  },
];

// ============================================================================
// ファイナンス② — 2. インベストメント / 3. デリバティブ / 4. ファイナンスに関するその他の論点
// ============================================================================

const KEIEI_PROBLEMS_FINANCE2 = [
  {
    num: "2-1", ch: "f2-ch2", title: "インベストメントの基礎知識", difficulty: "A",
    items: mkItems("finance2__2-1", [
      { label: "空欄穴埋め", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-2", ch: "f2-ch2", title: "期待収益率及び標準偏差の算定（個別証券）", difficulty: "A",
    items: mkItems("finance2__2-2", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "2-3", ch: "f2-ch2", title: "ポートフォリオ理論", difficulty: "A",
    items: mkItems("finance2__2-3", [
      { label: "空欄穴埋め", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-4", ch: "f2-ch2", title: "ポートフォリオの期待収益率と標準偏差の算定", difficulty: "B",
    items: mkItems("finance2__2-4", [
      { label: "単一問題", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "2-5", ch: "f2-ch2", title: "相関係数と共分散の算定", difficulty: "B",
    items: mkItems("finance2__2-5", [
      { label: "問1", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-6", ch: "f2-ch2", title: "最適ポートフォリオの決定", difficulty: "A",
    items: mkItems("finance2__2-6", [
      { label: "空欄穴埋め", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "2-7", ch: "f2-ch2", title: "有効フロンティア", difficulty: "B",
    items: mkItems("finance2__2-7", [
      { label: "問1", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["①②③⑩キーワード", "他設例なし", "★"] },
      { label: "問2", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "2-8", ch: "f2-ch2", title: "最適ポートフォリオの決定", difficulty: "A",
    items: mkItems("finance2__2-8", [
      { label: "問1（図示）", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問2（図示）", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3（図示）", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "2-9", ch: "f2-ch2", title: "分離定理，借入ポートフォリオ", difficulty: "B",
    items: mkItems("finance2__2-9", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["⑤キーワード"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問3", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問4", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問5", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "2-10", ch: "f2-ch2", title: "市場均衡", difficulty: "A",
    items: mkItems("finance2__2-10", [
      { label: "空欄穴埋め", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "2-11", ch: "f2-ch2", title: "資本市場線とリスク", difficulty: "B",
    items: mkItems("finance2__2-11", [
      { label: "問題1-問1", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問題1-問2", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問題2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問題3", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "2-12", ch: "f2-ch2", title: "CAPM①", difficulty: "A",
    items: mkItems("finance2__2-12", [
      { label: "空欄穴埋め", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "2-13", ch: "f2-ch2", title: "CAPM②", difficulty: "A",
    items: mkItems("finance2__2-13", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問3", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問4", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問5", imp: "C-C", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-14", ch: "f2-ch2", title: "βの算定", difficulty: "B",
    items: mkItems("finance2__2-14", [
      { label: "問題1-問1", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問題1-問2", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問題1-問3", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問題2(1)〜(3)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "2-15", ch: "f2-ch2", title: "CAPM③", difficulty: "B",
    items: mkItems("finance2__2-15", [
      { label: "問題1-問1", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし"] },
      { label: "問題1-問2", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["③④設例なし"] },
      { label: "問題1-問3", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問題2", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問題3", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "2-16", ch: "f2-ch2", title: "インベストメントの総合問題①", difficulty: "B",
    items: mkItems("finance2__2-16", [
      { label: "問1", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問2", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "2-17", ch: "f2-ch2", title: "インベストメントの総合問題②", difficulty: "C",
    items: mkItems("finance2__2-17", [
      { label: "空欄穴埋め（①〜⑧）", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["⑦⑧設例なし", "★"] },
    ]),
  },
  {
    num: "2-18", ch: "f2-ch2", title: "効率的市場①", difficulty: "A",
    items: mkItems("finance2__2-18", [
      { label: "空欄穴埋め", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-19", ch: "f2-ch2", title: "効率的市場②", difficulty: "C",
    items: mkItems("finance2__2-19", [
      { label: "事象1〜6の正誤判定", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし"] },
    ]),
  },
  {
    num: "2-20", ch: "f2-ch2", title: "CAPM・アノマリー", difficulty: "B",
    items: mkItems("finance2__2-20", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["⑦以外キーワード"] },
      { label: "問2", imp: "(1)B-B (2)〜(4)C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問4", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-21", ch: "f2-ch2", title: "債券投資①（債券価格，デュレーション，フォワードレート等）", difficulty: "C",
    items: mkItems("finance2__2-21", [
      { label: "問1", imp: "①~⑧A-A ⑤⑩C+-C+", rotationLeft: 3, rotationRight: 2, flags: ["④~⑩キーワード"] },
      { label: "問2", imp: "(1)(2)B-B (3)(4)C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問3", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-22", ch: "f2-ch2", title: "債券投資②（利回り，イールドカーブ，デュレーション，債券投資戦略）", difficulty: "B",
    items: mkItems("finance2__2-22", [
      { label: "問題1(1)", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["任意/不要"] },
      { label: "問題1(2)", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["任意/不要"] },
      { label: "問題1(3)", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["任意/不要"] },
      { label: "問題1(4)", imp: "B-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問題1(5)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問題1(6)", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問題1(7)", imp: "①~③C+-C+ ④⑤B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問題1(8)", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
      { label: "問題2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "2-23", ch: "f2-ch2", title: "債券投資③（債券投資戦略，その他）", difficulty: "B",
    items: mkItems("finance2__2-23", [
      { label: "問題1(1)(2)", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["(2)キーワード"] },
      { label: "問題2", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問題3", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
    ]),
  },
  {
    num: "2-24", ch: "f2-ch2", title: "インベストメント　キーワードまとめ", difficulty: "A",
    items: buildKeywordItems("finance2__2-24", [
      [1, "期待効用理論", "B-B"], [2, "平均・分散アプローチ", "B-B"], [3, "幾何平均", "B-B", 1], [4, "分散", "B-B"],
      [5, "リスク回避的投資家の特徴", "A-A"], [6, "無差別曲線", "B-B"], [7, "相関係数（ρ）", "A-A"],
      [8, "リスク分散効果（ポートフォリオ効果）", "A-A"], [9, "共分散", "B-B"], [10, "最適ポートフォリオ", "A-A"],
      [11, "投資機会集合", "A-A"], [12, "有効フロンティア（効率的フロンティア）", "A-A"],
      [13, "最小分散フロンティア", "B-C+", 1], [14, "最小分散ポートフォリオ", "B-C+", 1], [15, "接点ポートフォリオ", "A-A"],
      [16, "トービンの分離定理", "A-A"], [17, "貸付ポートフォリオ", "A-A"], [18, "借入ポートフォリオ", "A-A"],
      [19, "市場均衡", "B-B"], [20, "市場ポートフォリオ", "A-A"], [21, "資本市場線（CML）", "A-A"],
      [22, "システマティック・リスク（組織的リスク，市場リスク）", "A-A"],
      [23, "アンシステマティック・リスク（非組織的リスク，個別リスク）", "A-A"], [24, "リスクの市場価格", "B-B"],
      [25, "CAPM", "A-A", 1], [26, "β（ベータ）", "A-A", 1], [27, "証券市場線（SML）", "A-A"],
      [28, "証券特性線", "C+-C+", 1], [29, "空売り", "B-B"], [30, "ジェンセン測度（ジェンセンのα）", "A-A"],
      [31, "シャープ測度（シャープレシオ）", "A-A"], [32, "トレイナー測度（トレイナーレシオ）", "A-A"],
      [33, "シングルファクターモデル", "B-B"], [34, "TOPIX（東証株価指数）", "B-B"], [35, "日経225（日経平均株価指数）", "B-B"],
      [36, "JPX日経インデックス400（JPX日経400）", "B-B"], [37, "レバードベータ", "A-A", 1], [38, "アンレバードベータ", "A-A", 1],
      [39, "効率的市場", "A-A"], [40, "ウィークフォーム（弱度の効率性）", "A-A"], [41, "セミストロングフォーム（準強度の効率性）", "A-A"],
      [42, "ストロングフォーム（強度の効率性）", "A-A"], [43, "テクニカル分析", "A-A"], [44, "ファンダメンタルズ分析", "A-A"],
      [45, "アクティブ運用", "B-B"], [46, "パッシブ運用", "B-B"], [47, "伝統的ファイナンスと裁定取引に対する考え方", "A-A"],
      [48, "行動ファイナンスと裁定取引に対する考え方", "B-B"], [49, "ノイズトレーダーリスク", "C+-C+", 1], [50, "アノマリー", "B-B"],
      [51, "日経平均採用銘柄の株価水準", "B-B"], [52, "リターンリバーサル", "B-B"], [53, "モメンタム", "B-B"],
      [54, "小型株効果（規模効果，サイズ効果）", "B-C+"], [55, "バリュー株効果（B／M効果）", "B-C+"], [56, "イベントスタディ", "B-C+"],
      [57, "プロスペクト理論", "A-A", 1], [58, "バイアス", "C+-C+", 1], [59, "損失回避", "C+-C+", 1],
      [60, "ディスポジション効果", "C+-C+", 1], [61, "代表性", "C+-C+", 1], [62, "確実性効果", "C+-C+", 1],
      [63, "フレーミング効果", "C+-C+", 1], [64, "後悔回避", "C+-C+", 1], [65, "所有効果（保有効果）", "C+-C+", 1],
      [66, "現状維持バイアス", "C+-C+", 1], [67, "独立性効果", "C+-C+", 1], [68, "自信過剰", "C+-C+", 1],
      [69, "群集行動（横並び行動）", "C+-C+", 1], [70, "アンカリング（係留）", "C+-C+", 1], [71, "心の会計", "C+-C+", 1],
      [72, "マルチファクター・モデル", "B-B"], [73, "APT（裁定価格理論）", "B-B"], [74, "3ファクター・モデル", "B-B"],
      [75, "4ファクター・モデル", "B-B"], [76, "利付債（クーポン債）", "B-B"], [77, "割引債（ゼロクーポン債）", "B-B"],
      [78, "永久債（コンソル債）", "B-B"], [79, "直接利回り", "C+-C+"], [80, "最終利回り", "A-A"], [81, "実効利回り", "C+-C+"],
      [82, "単利利回り", "C+-C+"], [83, "スポットレート", "A-A"], [84, "フォワードレート", "A-A"],
      [85, "ディスカウント・ファクター", "B-B"], [86, "パー債券", "B-B"], [87, "オーバーパー債券", "B-B"],
      [88, "アンダーパー債券", "B-B"], [89, "金利変動リスク", "B-B"], [90, "再投資リスク", "B-B"], [91, "信用リスク", "B-B"],
      [92, "途中償還リスク", "C+-C+"], [93, "流動性リスク", "B-B"], [94, "（マコーレー）デュレーション", "A-A"],
      [95, "修正デュレーション", "B-B"], [96, "金額デュレーション", "C+-C+", 1], [97, "コンベクシティ", "C+-C+"],
      [98, "バイアンドホールド戦略", "C+-C+"], [99, "ブレット戦略", "C+-C+"], [100, "バーベル戦略", "C+-C+"],
      [101, "ラダー戦略", "C+-C+"], [102, "イミュニゼーション戦略", "B-B"], [103, "金利の期間構造", "B-B"],
      [104, "イールドカーブ（利回り曲線）", "A-A"], [105, "順イールド", "A-A"], [106, "逆イールド", "A-A"],
      [107, "純粋期待仮説", "B-B"], [108, "流動性プレミアム仮説", "B-B"], [109, "市場分断仮説", "B-B"],
    ]),
  },
  {
    num: "2-25", ch: "f2-ch2", title: "追加論点講義（比較的重要性の高いもの）", difficulty: "B",
    items: mkItems("finance2__2-25", [
      { label: "問1(1) 空欄①", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(2) 空欄②", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問1(3) 空欄②〜⑤", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["②③キーワード"] },
      { label: "問1(4) 空欄⑥⑦", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問1(5) 空欄⑧〜⑩", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["⑧⑨キーワード"] },
      { label: "問1(6) 空欄⑪⑫⑬", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(7) 空欄⑭⑮", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問1(8) 空欄⑯⑱", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問1(9) 空欄⑲", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(10) 空欄⑳〜㉒", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問1(11) 空欄㉒〜㉖", imp: "C+-C", rotationLeft: 1, rotationRight: null, flags: ["キーワード"] },
      { label: "問1(12) 空欄㉔〜㉗", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問1(13) 空欄㉘", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(14) 空欄", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問1(15) 額面デュレーション", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問1(16) 修正デュレーション", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2 無リスク資産と複数リスク資産の投資機会集合", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3 効率的フロンティア作図（貸付利率<借入利率）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問4 プロスペクト理論・価値関数", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "2-26", ch: "f2-ch2", title: "追加論点講義（比較的重要性の低いもの）", difficulty: "C",
    items: mkItems("finance2__2-26", [
      { label: "問1 行動ファイナンスのバイアス一覧（空欄①〜⑪）", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["キーワード"] },
    ]),
  },
  {
    num: "3-1", ch: "f2-ch3", title: "デリバティブ総論", difficulty: "A",
    items: mkItems("finance2__3-1", [
      { label: "空欄穴埋め（①〜⑪）", imp: "①C+-C+ 他B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "3-2", ch: "f2-ch3", title: "先物・先渡取引", difficulty: "B",
    items: mkItems("finance2__3-2", [
      { label: "問1 空欄①〜⑪", imp: "①~③C+-C+ ④⑤A-A 他B-B", rotationLeft: 2, rotationRight: 2, flags: ["④⑤以外キーワード"] },
      { label: "問2 株価指数先物取引の決済損益計算", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問3 空欄①〜③", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "3-3", ch: "f2-ch3", title: "金利スワップ", difficulty: "B",
    items: mkItems("finance2__3-3", [
      { label: "空欄穴埋め（①〜⑦）", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["③~⑦キーワード"] },
    ]),
  },
  {
    num: "3-4", ch: "f2-ch3", title: "通貨スワップ", difficulty: "B",
    items: mkItems("finance2__3-4", [
      { label: "空欄穴埋め（①〜⑧）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["①②キーワード"] },
    ]),
  },
  {
    num: "3-5", ch: "f2-ch3", title: "オプション", difficulty: "A",
    items: mkItems("finance2__3-5", [
      { label: "空欄穴埋め（①〜㉑）", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["キーワード", "★"] },
    ]),
  },
  {
    num: "3-6", ch: "f2-ch3", title: "オプションの損益計算", difficulty: "B",
    items: mkItems("finance2__3-6", [
      { label: "問1 プット売却損益表", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2 本質価値・時間価値算定", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問3 コール売却損益表", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問4 プット売却損益表・作図", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問5 コール売却損益表・作図", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "3-7", ch: "f2-ch3", title: "先物・オプションの損益計算", difficulty: "B",
    items: mkItems("finance2__3-7", [
      { label: "問1 空欄①〜⑥", imp: "A-B", rotationLeft: 2, rotationRight: 2, flags: ["①~④キーワード", "⑤⑥設例なし", "★"] },
      { label: "問2 総ペイオフグラフ作図", imp: "A-B", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問3 先物とコールオプションのメリデメ", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "3-8", ch: "f2-ch3", title: "本質価値と時間価値", difficulty: "A",
    items: mkItems("finance2__3-8", [
      { label: "問1 コールオプションプレミアムがゼロにならない理由", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問2 本質価値・時間価値算定", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問3 オプションプレミアム図・空欄", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
    ]),
  },
  {
    num: "3-9", ch: "f2-ch3", title: "オプションプレミアムの決定要因", difficulty: "A",
    items: mkItems("finance2__3-9", [
      { label: "(1) 正しくない記述を1つ選ぶ", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "(2) 正しい記述2つを選ぶ", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-10", ch: "f2-ch3", title: "デリバティブにおける理論価格の算定", difficulty: "B",
    items: mkItems("finance2__3-10", [
      { label: "問1 裁定取引・先物理論価格", imp: "B-B", rotationLeft: 3, rotationRight: 3, flags: ["①④⑦⑨⑩⑬キーワード"] },
      { label: "問2 先物理論価格（配当追加）", imp: "B-B", rotationLeft: 3, rotationRight: 3, flags: ["①④⑦⑨⑩キーワード"] },
      { label: "問3 先物理論価格の算定", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問4 金利下落・配当増加時の理論価格変化", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-11", ch: "f2-ch3", title: "為替予約（先渡取引）", difficulty: "A",
    items: mkItems("finance2__3-11", [
      { label: "問1 空欄①〜⑩", imp: "A-A", rotationLeft: 3, rotationRight: 3, flags: ["④⑤⑦⑧⑨設例なし", "⑨キーワード", "④⑤⑦⑧⑨★"] },
      { label: "問2 円建て投資収益率", imp: "A-A", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-12", ch: "f2-ch3", title: "2項分布モデル（複製ポートフォリオ法・確実性等価法）", difficulty: "C",
    items: mkItems("finance2__3-12", [
      { label: "問1 下線部の取引名", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2 株価推移・オプションキャッシュフロー", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問3 複製ポートフォリオ方程式・オプションプレミアム", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問4 モデル名称（カタカナ）", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問5 ヨーロピアン短期間モデル名称", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問6 リスク中立確率算定", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問7 オプションプレミアム算定", imp: "A-A", rotationLeft: 3, rotationRight: 2, flags: [] },
      { label: "問8 期待収益率・標準偏差", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["(2)設例なし", "★"] },
    ]),
  },
  {
    num: "3-13", ch: "f2-ch3", title: "2項分布モデル（プットコールパリティ）", difficulty: "B",
    items: mkItems("finance2__3-13", [
      { label: "問1 コールオプション価格算定", imp: "A-A", rotationLeft: 3, rotationRight: 3, flags: [] },
      { label: "問2(1) ITM/ATM/OTM判定", imp: "A-A", rotationLeft: 1, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問2(2) プットオプション現時点価格算定", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
      { label: "問3 コール1単位と同価値のポートフォリオ選択", imp: "B-B", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問4 ポートフォリオのキャッシュフロー図選択", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし", "★"] },
      { label: "問5 コール・プット価格が等しい場合の大小関係式", imp: "A-A", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-14", ch: "f2-ch3", title: "2項分布モデル（デルタヘッジング法）", difficulty: "C",
    items: mkItems("finance2__3-14", [
      { label: "空欄穴埋め（①〜④）", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: ["②キーワード"] },
    ]),
  },
  {
    num: "3-15", ch: "f2-ch3", title: "プットオプションのプレミアムの算定", difficulty: "C",
    items: mkItems("finance2__3-15", [
      { label: "問1 空欄①〜⑦", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: ["①⑤設例なし", "①⑤★"] },
      { label: "問2 空欄①〜③", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
    ]),
  },
  {
    num: "3-16", ch: "f2-ch3", title: "オプションプレミアム（その他の論点）", difficulty: "C",
    items: mkItems("finance2__3-16", [
      { label: "問1 空欄①〜⑥", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["③⑤⑥キーワード", "①設例なし", "①★"] },
      { label: "問2 空欄①〜⑧", imp: "B-B", rotationLeft: 3, rotationRight: 2, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-17", ch: "f2-ch3", title: "オプションプレミアム（応用問題）", difficulty: "C",
    items: mkItems("finance2__3-17", [
      { label: "空欄穴埋め（②③④⑥⑬キーワード／他設例なし）", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["②③④⑥⑬キーワード", "他設例なし", "★"] },
    ]),
  },
  {
    num: "3-18", ch: "f2-ch3", title: "投資決定理論②", difficulty: "C",
    items: mkItems("finance2__3-18", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問4", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["設例なし", "★"] },
    ]),
  },
  {
    num: "3-19", ch: "f2-ch3", title: "オプション戦略", difficulty: "B",
    items: mkItems("finance2__3-19", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["⑥キーワード"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["①キーワード"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["①キーワード"] },
      { label: "問4", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["③キーワード"] },
      { label: "問5", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["③⑥キーワード"] },
      { label: "問6", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["②設例なし", "④キーワード", "★"] },
    ]),
  },
  {
    num: "3-20", ch: "f2-ch3", title: "デリバティブ　キーワードまとめ", difficulty: "A",
    items: buildKeywordItems("finance2__3-20", [
      [1, "金融派生商品", "C+-C+"], [2, "ロングポジション", "B-B"], [3, "ショートポジション", "B-B"], [4, "ペイオフ", "B-B"],
      [5, "原資産", "B-B"], [6, "満期", "B-B"], [7, "レバレッジ", "B-B"], [8, "反対売買による差金決済", "B-B"],
      [9, "ゼロサムゲーム", "B-B"], [10, "リスクヘッジ", "B-B"], [11, "スペキュレーション", "B-B"], [12, "アービトラージ", "B-B"],
      [13, "取引所取引", "C+-C+"], [14, "相対取引", "C+-C+"], [15, "値洗い", "B-C+"], [16, "追証", "B-C+"], [17, "限月", "B-B"],
      [18, "日経平均先物・TOPIX先物の取引単位", "B-B"], [19, "建玉", "B-B"], [20, "金利スワップ取引", "B-B"],
      [21, "プレインバニラスワップ", "B-B"], [22, "想定元本", "B-B"], [23, "TIBOR", "B-B"], [24, "絶対優位", "B-B"],
      [25, "比較優位", "B-B"], [26, "権利行使価格", "B-B"], [27, "ヨーロピアン・オプション", "A-A"],
      [28, "アメリカン・オプション", "A-A"], [29, "コール・オプション", "A-A"], [30, "プット・オプション", "A-A"],
      [31, "オプションプレミアム", "A-A"], [32, "本質価値（本源価値・内在価値）", "A-A"], [33, "時間価値", "A-A"],
      [34, "ボラティリティ", "A-A"], [35, "タイムディケイ", "A-A"], [36, "インザマネー（ITM）", "A-A"],
      [37, "アットザマネー（ATM）", "A-A"], [38, "アウトオブザマネー（OTM）", "A-A"],
      [39, "為替差損ヘッジ（円高ドル安・売上債権）", "B-B"], [40, "為替差損ヘッジ（円安ドル高・仕入債務）", "B-B"],
      [41, "コール・オプションのメリット・デメリット（先物の買いとの比較）", "B-B"],
      [42, "株主資本価値とコール・オプションの関係", "B-B", 1], [43, "負債価値の複製（プット・オプション＋安全資産）", "C+-C+", 1],
      [44, "無裁定価格理論", "B-B"], [45, "（カバー付）金利平価説", "B-B"], [46, "購買力平価説", "C+-C+", 1],
      [47, "キャッシュアンドキャリー戦略", "B-B"], [48, "リバースキャッシュアンドキャリー戦略", "B-B"], [49, "キャリー・コスト", "B-B"],
      [50, "2項分布モデル（バイノミアルモデル）", "A-A"], [51, "ブラックショールズモデル", "C+-C+"], [52, "リスク調整法", "B-B"],
      [53, "確実性等価法", "A-A"], [54, "リスク中立確率", "A-A"], [55, "デルタ（△）", "B-B"], [56, "プットコールパリティ", "A-A"],
      [57, "リアル・オプション", "B-B"], [58, "ブルスプレッドの特徴", "B-B"], [59, "ベアスプレッドの特徴", "B-B"],
      [60, "ロングストラドルの特徴", "B-B"], [61, "ショートストラドルの特徴", "B-B"], [62, "プロテクティブプットの特徴", "B-B"],
      [63, "カバードコールの特徴", "B-B"], [64, "キャップ", "C+-C+"], [65, "フロア", "C+-C+"],
      [66, "クレジット・デフォルト・スワップ取引（CDS）", "B-B"],
    ]),
  },
  {
    num: "3-21", ch: "f2-ch3", title: "追加論点講義（比較的重要性の高いもの）", difficulty: "B",
    items: mkItems("finance2__3-21", [
      { label: "問1(1) 現物取引/先物取引キャッシュフロー比較", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: [] },
      { label: "問1(2) 取引最終日/SQ/証拠金制度", imp: "C-C（一部C+-C+）", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(3) 金利スワップ/絶対優位・比較優位", imp: "B-B（一部C+-C+）", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問1(4) コールオプション決済CF計算", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問1(5) インプライド・ヒストリカルボラティリティ", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(6) 企業価値/負債価値/株主資本価値とコールオプションのアナロジー", imp: "B-B", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(7) 購買力平価説", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(8) 先物価格・コールオプション決済フロー算定", imp: "C+-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
      { label: "問1(9) プットコールパリティ成立要件", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問1(10) キャップ・フロア/クレジットデフォルトスワップ", imp: "C-C（一部B-C+）", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2 負債価値の複製（選択肢問題）", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["設例なし"] },
      { label: "問3 為替レートに関する空欄補充", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["一部設例なし", "他キーワード"] },
      { label: "問4 リスクマネジメント正誤問題", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["設例なし"] },
    ]),
  },
  {
    num: "3-22", ch: "f2-ch3", title: "追加論点講義（比較的重要性の低いもの）", difficulty: "C",
    items: mkItems("finance2__3-22", [
      { label: "空欄穴埋め（(1)〜(4)）", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["キーワード"] },
    ]),
  },
  {
    num: "4-1", ch: "f2-ch4", title: "コーポレート・ファイナンス（森試験委員対策）", difficulty: "B",
    items: mkItems("finance2__4-1", [
      { label: "問1", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["(1)キーワード", "(2)設例なし"] },
      { label: "問2", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["設例なし"] },
      { label: "問4", imp: "B-C+", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問5", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
    ]),
  },
  {
    num: "4-2", ch: "f2-ch4", title: "リスクマネジメント（柳瀬試験委員，芹田試験委員対策）", difficulty: "B",
    items: mkItems("finance2__4-2", [
      { label: "問1", imp: "C+-C+（一部C-C）", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問2", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: ["キーワード"] },
      { label: "問3", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問4", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問5", imp: "C-C", rotationLeft: 1, rotationRight: null, flags: ["キーワード"] },
      { label: "問6", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: ["キーワード"] },
      { label: "問7", imp: "C+-C+", rotationLeft: 1, rotationRight: 1, flags: [] },
      { label: "問8", imp: "B-B", rotationLeft: 2, rotationRight: 2, flags: ["キーワード"] },
      { label: "問9", imp: "B-C+", rotationLeft: 2, rotationRight: 1, flags: [] },
    ]),
  },
  {
    num: "4-3", ch: "f2-ch4", title: "ファイナンスに関するその他の論点　キーワードまとめ", difficulty: "A",
    items: buildKeywordItems("finance2__4-3", [
      [1, "財務柔軟性（財務フレキシビリティ）", "B-B"], [2, "エージェンシー理論における最適資本構成", "B-B"],
      [3, "機会の窓仮説", "B-C+"], [4, "配当パズル", "B-B"], [5, "純粋リスク", "C+-C+"], [6, "投機的リスク", "C+-C+"],
      [7, "BCP（事業継続計画）", "B-B"], [8, "VaR（バリュー・アット・リスク）", "C+-C+"], [9, "リスク・マップ", "B-B"],
      [10, "ERM（全社的リスクマネジメント）", "B-B"], [11, "リスクコントロール", "B-B"], [12, "損失予防", "B-B"],
      [13, "損失低減", "B-B"], [14, "リスクファイナンス", "B-B"], [15, "（リスクの）保有", "B-B"], [16, "（リスクの）移転", "B-B"],
      [17, "（保険契約における）逆選択", "B-C+"], [18, "（保険契約における）モラルハザード", "B-C+"], [19, "確実性等価", "B-B"],
    ]),
  },
];

// ============================================================================
// 今後、他の問題集（組織論・マーケティング・戦略論など）を追加する場合は、
// 上記と同じ形式で KEIEI_PROBLEMS_<book> という配列を追加し、
// 下の KEIEI_ALL_PROBLEMS に連結してください。
// ============================================================================

const KEIEI_ALL_PROBLEMS = []
  .concat(KEIEI_PROBLEMS_FINANCE1.map(function (p) { return Object.assign({ book: "finance1" }, p); }))
  .concat(KEIEI_PROBLEMS_FINANCE2.map(function (p) { return Object.assign({ book: "finance2" }, p); }));
