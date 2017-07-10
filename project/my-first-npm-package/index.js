let str = "我的第一个npm包";
//导出str提供别人使用

/**
 *
 * @param a
 * @param b
 * @returns {{a: *, b: *}}
 */

function test (a,b) {
    return {
        a,
        b
    }
}

module.exports = str;