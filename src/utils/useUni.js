const useUni = uni

// 赋值全局数据
useUni.ZJSON = function (data) { // 转json
  return encodeURIComponent(JSON.stringify(data))
}
useUni.ZZFC = function (data) { // 转字符串
  return JSON.parse(decodeURIComponent(data))
}

export default useUni
