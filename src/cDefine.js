// Modified by xiazeyu.

/**
* @desc The definitions of values releated to model react
*/

var cDefine = {

    DEBUG_LOG : false,
    DEBUG_MOUSE_LOG : false,
    // DEBUG_DRAW_HIT_AREA : false,
    // DEBUG_DRAW_ALPHA_MODEL : false,


    VIEW_MAX_SCALE : 2, // 2
    VIEW_MIN_SCALE : 0.8, // 0.8

    VIEW_LOGICAL_LEFT : -1, // -1
    VIEW_LOGICAL_RIGHT : 1, // 1

    VIEW_LOGICAL_MAX_LEFT : -2, // -2
    VIEW_LOGICAL_MAX_RIGHT : 2, // 2
    VIEW_LOGICAL_MAX_BOTTOM : -2, // -2
    VIEW_LOGICAL_MAX_TOP : 2, // 2


    PRIORITY_NONE : 0, // 0
    PRIORITY_IDLE : 1, // 1
    PRIORITY_NORMAL : 2, // 2
    PRIORITY_FORCE : 3, // 3

    MOTION_GROUP_IDLE : "idle",
    MOTION_GROUP_TAP_BODY : "tap_body",
    MOTION_GROUP_FLICK_HEAD : "flick_head",
    MOTION_GROUP_PINCH_IN : "pinch_in",
    MOTION_GROUP_PINCH_OUT : "pinch_out",
    MOTION_GROUP_SHAKE : "shake",


    HIT_AREA_HEAD : "head",
    HIT_AREA_BODY : "body"

};

module.exports = cDefine;
