/**
 * @author: 孙万俊
 * @description: 验证是pc还是移动
 * @param {type} 
 * @return: boole
 * @Date: 2019-06-13 14:22:03
 */
export function isMobleOrPc(){
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        return true;
    }else{
        return false;
    }
}