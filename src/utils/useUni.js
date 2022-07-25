const useUni = uni

// 赋值全局数据
useUni.ZJSON = function (data) { // 转json
  return encodeURIComponent(JSON.stringify(data))
}
useUni.ZZFC = function (data) { // 转字符串
  return JSON.parse(decodeURIComponent(data))
}
useUni.GetData = function (e) { // 获取事件传过来的值
  return e.currentTarget.dataset
}

export default useUni
