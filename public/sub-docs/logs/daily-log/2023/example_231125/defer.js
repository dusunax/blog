(function () {
  let process = 0;
  for (let i = 0; i < 100000000; i++) {
    process = ++process;
  }
  // console.log("defer 스크립트 로드 완료");
  console.log(
    "defer 스크립트 로드 완료",
    "\n",
    document.querySelector("body"),
    "\n",
    document.querySelector("head")
  );
})();
