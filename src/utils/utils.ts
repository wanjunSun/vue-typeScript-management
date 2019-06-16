/**
 * @author: 青稞
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

/**
 * @author: 青稞
 * @description: 进入全屏
 * @param {type} 
 * @return: 
 * @Date: 2019-06-14 11:58:07
 */
export function requestFullScreen(){
    let de = document.documentElement;
    if (de.requestFullscreen) {
      de.requestFullscreen();
    } 
}
/**
 * @author: 青稞
 * @description: 退出全屏
 * @param {type} 
 * @return: 
 * @Date: 2019-06-14 11:58:07
 */
export function exitFullScreen(){
    var de = document;
    if (de.exitFullscreen) {
      de.exitFullscreen();
    } 
}