// ============================================================================
// 経営学 個別問題集 復習管理 — 問題データ
// 出典: CPA会計士講座 経営学 個別問題集（ファイナンス①）2026年合格目標
//
// 各問題(item)の rotationLeft は「回転数」欄の左側の数値（時間に余裕がある人向け）
// を採用回数の目標としている。rotationRight は参考として保持するのみ（右側の数値、
// 時間がない人向け）。rotationLeft が null の場合は「回転不要／任意」を意味する。
// ============================================================================

const KEIEI_BOOKS = [
  { id: "finance1", name: "ファイナンス①", order: 1 },
];

// 章（今のところファイナンス①は第1章のみ。今後の科目追加はこの配列に章を足していく）
const KEIEI_CHAPTERS = [
  { id: "f1-ch1", book: "finance1", name: "1. コーポレート・ファイナンス，財務分析，資金調達，運転資本管理", order: 1 },
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
// 今後、他の問題集（組織論・マーケティング・戦略論など）を追加する場合は、
// 上記と同じ形式で KEIEI_PROBLEMS_<book> という配列を追加し、
// 下の KEIEI_ALL_PROBLEMS に連結してください。
// ============================================================================

const KEIEI_ALL_PROBLEMS = []
  .concat(KEIEI_PROBLEMS_FINANCE1.map(function (p) { return Object.assign({ book: "finance1" }, p); }));
