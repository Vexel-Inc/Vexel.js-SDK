// NOTE: This Library Build On Vexel-CSS Dev_v1.3
// NOTE: All Classes Constructor Don't Forget To Write Before It {new} Keyword To Run It.
// Web API
// Window Open
/**
 * Opening The Popup Window Or New Tab Includes The URL Website
 * @param URL (`String` | `undefined`)
 * @returns Website
 */
var WindowOpen = /** @class */ (function () {
    function WindowOpen(window_url) {
        window.open(window_url);
    }
    return WindowOpen;
}());
// Window Close
/**
 * Close The Current Document
 * @param void
 */
var WindowClose = /** @class */ (function () {
    function WindowClose() {
        window.close();
    }
    return WindowClose;
}());
// Locations
/**
 * Get The Current Location & Print In Browser Console
 * @param void
 */
var getLocation = /** @class */ (function () {
    function getLocation() {
        console.log(window.location);
    }
    return getLocation;
}());
/**
 * Get The Current Location Assign & Print In Browser Console
 * @param void
 */
var getLocationAssing = /** @class */ (function () {
    function getLocationAssing() {
        console.log(window.location.assign);
    }
    return getLocationAssing;
}());
/**
 * Get The Current Location Hash & Print In Browser Console
 * @param void
 */
var getLocationHash = /** @class */ (function () {
    function getLocationHash() {
        console.log(window.location.hash);
    }
    return getLocationHash;
}());
/**
 * Get The Current Location Host & Print In Browser Console
 * @param void
 */
var getLocationHost = /** @class */ (function () {
    function getLocationHost() {
        console.log(window.location.host);
    }
    return getLocationHost;
}());
/**
 * Get The Current Location Hostname & Print In Browser Console
 * @param void
 */
var getLocationHostname = /** @class */ (function () {
    function getLocationHostname() {
        console.log(window.location.hostname);
    }
    return getLocationHostname;
}());
/**
 * Get The Current Location Href & Print In Browser Console
 * @param void
 */
var getLocationHref = /** @class */ (function () {
    function getLocationHref() {
        console.log(window.location.href);
    }
    return getLocationHref;
}());
/**
 * Get The Current Location Origin & Print In Browser Console
 * @param void
 */
var getLocationOrigin = /** @class */ (function () {
    function getLocationOrigin() {
        console.log(window.location.origin);
    }
    return getLocationOrigin;
}());
/**
 * Get The Current Location Pathname & Print In Browser Console
 * @param void
 */
var getLocationPathname = /** @class */ (function () {
    function getLocationPathname() {
        console.log(window.location.pathname);
    }
    return getLocationPathname;
}());
/**
 * Get The Current Location Port & Print In Browser Console
 * @param void
 */
var getLocationPort = /** @class */ (function () {
    function getLocationPort() {
        console.log(window.location.port);
    }
    return getLocationPort;
}());
/**
 * Get The Current Location Protocol & Print In Browser Console
 * @param void
 */
var getLocationProtocol = /** @class */ (function () {
    function getLocationProtocol() {
        console.log(window.location.protocol);
    }
    return getLocationProtocol;
}());
/**
 * Get The Current Location Reload & Print In Browser Console
 * @param void
 */
var getLocationReload = /** @class */ (function () {
    function getLocationReload() {
        console.log(window.location.reload);
    }
    return getLocationReload;
}());
/**
 * Get The Current Location Replace & Print In Browser Console
 * @param void
 */
var getLocationReplace = /** @class */ (function () {
    function getLocationReplace() {
        console.log(window.location.replace);
    }
    return getLocationReplace;
}());
/**
 * Get The Current Location Search & Print In Browser Console
 * @param void
 */
var getLocationSearch = /** @class */ (function () {
    function getLocationSearch() {
        console.log(window.location.search);
    }
    return getLocationSearch;
}());
/**
 * Get The Current Location Tostring & Print In Browser Console
 * @param void
 */
var getLocationTostring = /** @class */ (function () {
    function getLocationTostring() {
        console.log(window.location.toString);
    }
    return getLocationTostring;
}());
/**
 * Show Message Alert Popup In Browser
 * @param string (`any` | `undefined`)
 * @returns Alert
 */
var msg_popup = /** @class */ (function () {
    function msg_popup(msg_val) {
        alert(msg_val);
    }
    return msg_popup;
}());
/**
 * Show Atob Message In Browser Console Like `content` In CSS
 * @param string (`any` | `undefined`)
 * @returns Atob Message
 */
var atob_msg = /** @class */ (function () {
    function atob_msg(atob_val) {
        atob(atob_val);
    }
    return atob_msg;
}());
// Console API
/**
 * Print Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Message
 */
var console_msg = /** @class */ (function () {
    function console_msg(cons_val) {
        console.log(cons_val);
    }
    return console_msg;
}());
/**
 * Print Warning Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Warning Message
 */
var console_warn = /** @class */ (function () {
    function console_warn(cons_val) {
        console.warn(cons_val);
    }
    return console_warn;
}());
/**
 * Print Error Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Error Message
 */
var console_error = /** @class */ (function () {
    function console_error(cons_val) {
        console.error(cons_val);
    }
    return console_error;
}());
/**
 * Print Table Message In Browser Console
 * @param string | `number` | `string[]`| `number[]`
 * @returns Table Message
 */
var console_table = /** @class */ (function () {
    function console_table(cons_val) {
        console.table(cons_val);
    }
    return console_table;
}());
/**
 * Print Message With Information Arrow Expanded In Browser Console
 * @param any | `any[]`
 * @returns Message With Information Arrow Expanded
 */
var console_trace = /** @class */ (function () {
    function console_trace(cons_val) {
        console.trace(cons_val);
    }
    return console_trace;
}());
/**
 * Clear Browser Console
 * @param void
 */
var console_clear = /** @class */ (function () {
    function console_clear() {
        console.clear();
    }
    return console_clear;
}());
/**
 * Count Numbers For Each Element
 * @param label | `String`
 * @returns Message With Counter
 */
var console_count = /** @class */ (function () {
    function console_count(cons_val) {
        console.count(cons_val);
    }
    return console_count;
}());
/**
 * Reset Message Count
 * @param label | `String`
 * @returns Message With Reset Counter
 */
var console_countReset = /** @class */ (function () {
    function console_countReset(cons_val) {
        console.countReset(cons_val);
    }
    return console_countReset;
}());
/**
 * Print Grouping Message In Browser Console
 * @param any | `any[]`
 * @returns Grouping Message
 */
var console_group = /** @class */ (function () {
    function console_group(cons_val) {
        console.group(cons_val);
    }
    return console_group;
}());
/**
 * Print Collapsed Grouping Message In Browser Console
 * @param any | `any[]`
 * @returns Collapsed Grouping Message
 */
var console_groupCollapsed = /** @class */ (function () {
    function console_groupCollapsed(cons_val) {
        console.groupCollapsed(cons_val);
    }
    return console_groupCollapsed;
}());
/**
 * Get Group End
 * @param void
 */
var console_groupEnd = /** @class */ (function () {
    function console_groupEnd() {
        console.groupEnd();
    }
    return console_groupEnd;
}());
// Document Object Model [DOM]
// Print
/**
 * Print Text & HTML Elements In Document
 * @param string | `any`
 * @example
 * ```
 * new printf('YOUR_TEXT_OR_HTML_ELEMENT')
 * ```
 * @returns Text Or HTML Elements
 */
var printf = /** @class */ (function () {
    function printf(printf_val) {
        document.writeln(printf_val);
    }
    return printf;
}());
/**
 * Print Text Only In Document
 * @param string
 * @example
 * ```
 * new println('YOUR_TEXT')
 * ```
 * @returns Text
 */
var println = /** @class */ (function () {
    function println(println_val) {
        document.writeln(println_val);
    }
    return println;
}());
// Print Document
/**
 * Print The Current Document
 * @param void
 * @example
 * ```
 * new printDoc(): void
 * ```
 */
var printDoc = /** @class */ (function () {
    function printDoc() {
        print();
    }
    return printDoc;
}());
// Events
var customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
var nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];
/**
 * Get The All Current Document Events
 * @param void
 * @example
 * ```
 * new getEvents(): void
 * ```
 */
var getEvents = /** @class */ (function () {
    function getEvents() {
        new console_msg(nativeEvents);
    }
    return getEvents;
}());
/**
 * Get The All Current Document Events Length
 * @param void
 * @example
 * ```
 * new getEventsLength(): void
 * ```
 */
var getEventsLength = /** @class */ (function () {
    function getEventsLength() {
        new console_msg(nativeEvents.length);
    }
    return getEventsLength;
}());
// Get Events
// click Event
/**
 * Get `Click` Event To Add In `addEventListener` Function To Use It When Callback `getClickEvent` Function
 * @param void
 * @example
 * ```
 * new getClickEvent(): void
 * ```
 */
var getClickEvent = /** @class */ (function () {
    function getClickEvent() {
        new console_msg(nativeEvents[0]);
    }
    return getClickEvent;
}());
// dblclick Event
/**
 * Get `dblclick` Event To Add In `addEventListener` Function To Use It When Callback `getdbClickEvent` Function
 * @param void
 * @example
 * ```
 * new getdbClickEvent(): void
 * ```
 */
var getdbClickEvent = /** @class */ (function () {
    function getdbClickEvent() {
        new console_msg(nativeEvents[1]);
    }
    return getdbClickEvent;
}());
// mouseup Event
/**
 * Get `mouseup` Event To Add In `addEventListener` Function To Use It When Callback `getMouseupEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseupEvent(): void
 * ```
 */
var getMouseupEvent = /** @class */ (function () {
    function getMouseupEvent() {
        new console_msg(nativeEvents[2]);
    }
    return getMouseupEvent;
}());
// mousedown Event
/**
 * Get `mousedown` Event To Add In `addEventListener` Function To Use It When Callback `getMousedownEvent` Function
 * @param void
 * @example
 * ```
 * new getMousedownEvent(): void
 * ```
 */
var getMousedownEvent = /** @class */ (function () {
    function getMousedownEvent() {
        new console_msg(nativeEvents[3]);
    }
    return getMousedownEvent;
}());
// contextmenu Event
/**
 * Get `contextmenu` Event To Add In `addEventListener` Function To Use It When Callback `getContextmenuEvent` Function
 * @param void
 * @example
 * ```
 * new getContextmenuEvent(): void
 * ```
 */
var getContextmenuEvent = /** @class */ (function () {
    function getContextmenuEvent() {
        new console_msg(nativeEvents[4]);
    }
    return getContextmenuEvent;
}());
// mousewheel Event
/**
 * Get `mousewheel` Event To Add In `addEventListener` Function To Use It When Callback `getMousewheelEvent` Function
 * @param void
 * @example
 * ```
 * new getMousewheelEvent(): void
 * ```
 */
var getMousewheelEvent = /** @class */ (function () {
    function getMousewheelEvent() {
        new console_msg(nativeEvents[5]);
    }
    return getMousewheelEvent;
}());
// DOMMouseScroll Event
/**
 * Get `DOMMouseScroll` Event To Add In `addEventListener` Function To Use It When Callback `getDOMMouseScrollEvent` Function
 * @param void
 * @example
 * ```
 * new getDOMMouseScrollEvent(): void
 * ```
 */
var getDOMMouseScrollEvent = /** @class */ (function () {
    function getDOMMouseScrollEvent() {
        new console_msg(nativeEvents[6]);
    }
    return getDOMMouseScrollEvent;
}());
// mouseover Event
/**
 * Get `mouseover` Event To Add In `addEventListener` Function To Use It When Callback `getMouseoverEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseoverEvent(): void
 * ```
 */
var getMouseoverEvent = /** @class */ (function () {
    function getMouseoverEvent() {
        new console_msg(nativeEvents[7]);
    }
    return getMouseoverEvent;
}());
// mouseout Event
/**
 * Get `mouseout` Event To Add In `addEventListener` Function To Use It When Callback `getMouseoutEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseoutEvent(): void
 * ```
 */
var getMouseoutEvent = /** @class */ (function () {
    function getMouseoutEvent() {
        new console_msg(nativeEvents[8]);
    }
    return getMouseoutEvent;
}());
// mousemove Event
/**
 * Get `mousemove` Event To Add In `addEventListener` Function To Use It When Callback `getMousemoveEvent` Function
 * @param void
 * @example
 * ```
 * new getMousemoveEvent(): void
 * ```
 */
var getMousemoveEvent = /** @class */ (function () {
    function getMousemoveEvent() {
        new console_msg(nativeEvents[9]);
    }
    return getMousemoveEvent;
}());
// selectstart Event
/**
 * Get `selectstart` Event To Add In `addEventListener` Function To Use It When Callback `getSelectstartEvent` Function
 * @param void
 * @example
 * ```
 * new getSelectstartEvent(): void
 * ```
 */
var getSelectstartEvent = /** @class */ (function () {
    function getSelectstartEvent() {
        new console_msg(nativeEvents[10]);
    }
    return getSelectstartEvent;
}());
// selectend Event
/**
 * Get `selectend` Event To Add In `addEventListener` Function To Use It When Callback `getSelectendEvent` Function
 * @param void
 * @example
 * ```
 * new getSelectendEvent(): void
 * ```
 */
var getSelectendEvent = /** @class */ (function () {
    function getSelectendEvent() {
        new console_msg(nativeEvents[11]);
    }
    return getSelectendEvent;
}());
// keydown Event
/**
 * Get `keydown` Event To Add In `addEventListener` Function To Use It When Callback `getKeydownEvent` Function
 * @param void
 * @example
 * ```
 * new getKeydownEvent(): void
 * ```
 */
var getKeydownEvent = /** @class */ (function () {
    function getKeydownEvent() {
        new console_msg(nativeEvents[12]);
    }
    return getKeydownEvent;
}());
// keypress Event
/**
 * Get `keypress` Event To Add In `addEventListener` Function To Use It When Callback `getKeypressEvent` Function
 * @param void
 * @example
 * ```
 * new getKeypressEvent(): void
 * ```
 */
var getKeypressEvent = /** @class */ (function () {
    function getKeypressEvent() {
        new console_msg(nativeEvents[13]);
    }
    return getKeypressEvent;
}());
// More Events In Next Version
// All Get Methods
// Document
/**
 * Get `Document` Function Return The Document Object Model `[DOM]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDoc(): void
 * ```
 */
var getDoc = /** @class */ (function () {
    function getDoc() {
        new console_msg(document);
    }
    return getDoc;
}());
/**
 * Get `Document_URL` Function Return The Document `[URL]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocURL(): void
 * ```
 */
var getDocURL = /** @class */ (function () {
    function getDocURL() {
        new console_msg(document.URL);
    }
    return getDocURL;
}());
/**
 * Get `Document_Base_URL` Function Return The Document `[URL]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocBaseURL(): void
 * ```
 */
var getDocBaseURL = /** @class */ (function () {
    function getDocBaseURL() {
        new console_msg(document.baseURI);
    }
    return getDocBaseURL;
}());
/**
 * Get `Document_Root_Node` Function Return The Document `[FULL_DOC]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocRootNode(): void
 * ```
 */
var getDocRootNode = /** @class */ (function () {
    function getDocRootNode() {
        new console_msg(document.getRootNode());
    }
    return getDocRootNode;
}());
/**
 * Get `Document_Type` Function Return The Document `[DOC_TYPE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocType(): void
 * ```
 */
var getDocType = /** @class */ (function () {
    function getDocType() {
        new console_msg(document.contentType);
    }
    return getDocType;
}());
/**
 * Get `Document_Head` Function Return The Document `[DOC_HEAD_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocHead(): void
 * ```
 */
var getDocHead = /** @class */ (function () {
    function getDocHead() {
        new console_msg(document.head);
    }
    return getDocHead;
}());
/**
 * Get `Document_Body` Function Return The Document `[DOC_BODY_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocBody(): void
 * ```
 */
var getDocBody = /** @class */ (function () {
    function getDocBody() {
        new console_msg(document.body);
    }
    return getDocBody;
}());
/**
 * Get `Document_Type_Element` Function Return The Document `[DOC_TYPE_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocTypeElement(): void
 * ```
 */
var getDocTypeElement = /** @class */ (function () {
    function getDocTypeElement() {
        new console_msg(document.doctype);
    }
    return getDocTypeElement;
}());
/**
 * Get `Document_Child_Nodes` Function Return The Document `[DOC_CHILD_NODES]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocChildNodes(): void
 * ```
 */
var getDocChildNodes = /** @class */ (function () {
    function getDocChildNodes() {
        new console_msg(document.childNodes);
    }
    return getDocChildNodes;
}());
/**
 * Get `Document_Children` Function Return The Document `[DOC_CHILDREN]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocChildren(): void
 * ```
 */
var getDocChildren = /** @class */ (function () {
    function getDocChildren() {
        new console_msg(document.children);
    }
    return getDocChildren;
}());
/**
 * Get `Document_Compat_Mode` Function Return The Document `[DOC_COMPAT_MODE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCompatMode(): void
 * ```
 */
var getDocCompatMode = /** @class */ (function () {
    function getDocCompatMode() {
        new console_msg(document.compatMode);
    }
    return getDocCompatMode;
}());
/**
 * Get `Document_Current_Script` Function Return The Document `[DOC_CURRENT_SCRIPT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCurrentScript(): void
 * ```
 */
var getDocCurrentScript = /** @class */ (function () {
    function getDocCurrentScript() {
        new console_msg(document.currentScript);
    }
    return getDocCurrentScript;
}());
/**
 * Get `Document_Cdata_Section_Node` Function Return The Document `[DOC_CDATA_SECTION_NODE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCdataSectionNode(): void
 * ```
 */
var getDocCdataSectionNode = /** @class */ (function () {
    function getDocCdataSectionNode() {
        new console_msg(document.CDATA_SECTION_NODE);
    }
    return getDocCdataSectionNode;
}());
/**
 * Get `Document_Encoding` Function Return The Document `[DOC_ENCODING]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocEncoding(): void
 * ```
 */
var getDocEncoding = /** @class */ (function () {
    function getDocEncoding() {
        new console_msg(document.characterSet);
    }
    return getDocEncoding;
}());
/**
 * Get `Document_First_Child` Function Return The Document `[DOC_FIRST_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocFirstChild(): void
 * ```
 */
var getDocFirstChild = /** @class */ (function () {
    function getDocFirstChild() {
        new console_msg(document.firstChild);
    }
    return getDocFirstChild;
}());
/**
 * Get `Document_First_Element_Child` Function Return The Document `[DOC_FIRST_ELEMENT_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocFirstElementChild(): void
 * ```
 */
var getDocFirstElementChild = /** @class */ (function () {
    function getDocFirstElementChild() {
        new console_msg(document.firstElementChild);
    }
    return getDocFirstElementChild;
}());
/**
 * Get `Document_Last_Child` Function Return The Document `[DOC_LAST_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastChild(): void
 * ```
 */
var getDocLastChild = /** @class */ (function () {
    function getDocLastChild() {
        new console_msg(document.lastChild);
    }
    return getDocLastChild;
}());
/**
 * Get `Document_Last_Element_Child` Function Return The Document `[DOC_LAST_ELEMENT_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastElementChild(): void
 * ```
 */
var getDocLastElementChild = /** @class */ (function () {
    function getDocLastElementChild() {
        new console_msg(document.lastElementChild);
    }
    return getDocLastElementChild;
}());
/**
 * Get `Document_Last_Modified` Function Return The Document `[DOC_LAST_Modified]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastModified(): void
 * ```
 */
var getDocLastModified = /** @class */ (function () {
    function getDocLastModified() {
        new console_msg(document.lastModified);
    }
    return getDocLastModified;
}());
// Date
/**
 * Return Current Date & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDate(): void
 * ```
 */
var getDate = /** @class */ (function () {
    function getDate() {
        new console_msg(new Date());
    }
    return getDate;
}());
/**
 * Return Current Time Value In Milliseconds Since Midnight, January 1, 1970 UTC & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getTime(): void
 * ```
 */
var getTime = /** @class */ (function () {
    function getTime() {
        new console_msg(new Date().getTime());
    }
    return getTime;
}());
/**
 * Return Current Year In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getYear(): void
 * ```
 */
var getYear = /** @class */ (function () {
    function getYear() {
        new console_msg(new Date().getFullYear());
    }
    return getYear;
}());
/**
 * Return Current Day Of The Month In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDay_M(): void
 * ```
 */
var getDay_M = /** @class */ (function () {
    function getDay_M() {
        new console_msg(new Date().getDate());
    }
    return getDay_M;
}());
/**
 * Return Current Day Of The Week In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDay(): void
 * ```
 */
var getDay = /** @class */ (function () {
    function getDay() {
        new console_msg(new Date().getDay());
    }
    return getDay;
}());
/**
 * Return Current Hours In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getHours(): void
 * ```
 */
var getHours = /** @class */ (function () {
    function getHours() {
        new console_msg(new Date().getHours());
    }
    return getHours;
}());
/**
 * Return Current Universal Coordinated Time (UTC) Hours In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Hours(): void
 * ```
 */
var getUTC_Hours = /** @class */ (function () {
    function getUTC_Hours() {
        new console_msg(new Date().getUTCHours());
    }
    return getUTC_Hours;
}());
/**
 * Return Current Minutes In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getMinutes(): void
 * ```
 */
var getMinutes = /** @class */ (function () {
    function getMinutes() {
        new console_msg(new Date().getMinutes());
    }
    return getMinutes;
}());
/**
 * Return Current Universal Coordinated Time (UTC) Minutes In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Minutes(): void
 * ```
 */
var getUTC_Minutes = /** @class */ (function () {
    function getUTC_Minutes() {
        new console_msg(new Date().getUTCMinutes());
    }
    return getUTC_Minutes;
}());
/**
 * Return Current Milliseconds In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getMilliseconds(): void
 * ```
 */
var getMilliseconds = /** @class */ (function () {
    function getMilliseconds() {
        new console_msg(new Date().getMilliseconds());
    }
    return getMilliseconds;
}());
/**
 * Return Current Universal Coordinated Time (UTC) Milliseconds In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Milliseconds(): void
 * ```
 */
var getUTC_Milliseconds = /** @class */ (function () {
    function getUTC_Milliseconds() {
        new console_msg(new Date().getUTCMilliseconds());
    }
    return getUTC_Milliseconds;
}());
// Set & Random Things
/**
 * Return Genereator ID
 * @param void
 * @example
 * ```
 * new ID_Genereator(): string | number | any
 * ```
 */
var ID_Genereator = /** @class */ (function () {
    function ID_Genereator(btoa_val) {
        document.writeln(window.btoa(btoa_val));
    }
    return ID_Genereator;
}());
/**
 * Return Random Genereator ID With `Math` Object
 * @param void
 * @example
 * ```
 * new random_ID_Genereator(): void
 * ```
 */
var random_ID_Genereator = /** @class */ (function () {
    function random_ID_Genereator() {
        document.writeln(window.btoa("".concat(Math.random())));
    }
    return random_ID_Genereator;
}());
// Set Classes
// Timer Counter
/**
 * Return a Infinte Interval Counter & Print In Browser Console
 * @param Milliseconds
 * @example
 * ```
 * new setCounter(): Counter_Time
 * ```
 */
var setCounter = /** @class */ (function () {
    function setCounter(counter_Time) {
        var counter = 0;
        setInterval(function () {
            new console_msg(counter++);
        }, counter_Time);
    }
    return setCounter;
}());
/**
 * Return a Same `setCounter()` Function But With End Of Counter & Print In Browser Console
 * @param Milliseconds
 * @param Counter_End
 * @example
 * ```
 * new setTimeCounter(): Counter_Timer | Counter_End
 * ```
 */
var setTimeCounter = /** @class */ (function () {
    function setTimeCounter(counter_Timer, counter_end) {
        var counter = 0;
        var interval_Counter = setInterval(function () {
            new console_msg(counter++);
            if (counter === counter_end) {
                clearInterval(interval_Counter);
            }
        }, counter_Timer);
    }
    return setTimeCounter;
}());
// Theme
var theme = 'Dark';
/**
 * Set The Main Web App Theme
 * @param String | `undefined`
 * @deprecated
 * @working => `Not`
 * @example
 * ```
 * new setTheme(): Theme_Name
 * ```
 */
var setTheme = /** @class */ (function () {
    function setTheme(theme_val) {
        if (theme === 'Dark') {
            document.body.style.background = 'red';
        }
        else if (theme !== 'Dark') {
            // # Block Of Code
        }
        else if (theme === theme_val) {
            // # Block Of Code
        }
    }
    return setTheme;
}());
// Magic Classes
/// Text
// Clone
/**
* Magic Class For Add Values Before & After Text
* @param string | `any`
* @example
* ```
* new __CLONE__(): string | any
* ```
*/
var __CLONE__ = /** @class */ (function () {
    function __CLONE__(clone_char, clone_val) {
        document.writeln("".concat(clone_char).concat(clone_val).concat(clone_char));
    }
    return __CLONE__;
}());
// Cut
/**
* Magic Class For Cut From Any Place In Text
* @param string | `any`
* @example
* ```
* new __CUT__(): string | any
* ```
*/
var __CUT__ = /** @class */ (function () {
    function __CUT__(cut_pos, cut_txt) {
        document.writeln("".concat(cut_txt.slice(cut_pos)));
    }
    return __CUT__;
}());
/// API & Data
/**
* Magic Class For Fetching Data From URL & Print In Browser Console
* @param string | `URL` | `boolean` | `any`
* @example
* ```
* new __IMPORT__(): Data
* ```
*/
var __IMPORT__ = /** @class */ (function () {
    function __IMPORT__(fetch_method, fetch_url, fetch_type) {
        var request = new XMLHttpRequest();
        request.open(fetch_method, fetch_url);
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                new console_msg(this.responseText);
            }
            if (fetch_type === true) {
                var jsonReq = JSON.parse(this.responseText);
                new console_msg(jsonReq);
            }
        };
    }
    return __IMPORT__;
}());
/**
* Magic Class For Import & Include Another Javascript[JS] Files & Components
* @param string
* @deprecated
* @example
* ```
* new __INCLUDE__(): String
* ```
*/
var __INCLUDE__ = /** @class */ (function () {
    function __INCLUDE__(import_path) {
        var import_var = "<script src=\"".concat(import_path, "\"></script>");
        document.body.append(import_var);
    }
    return __INCLUDE__;
}());
/**
* Magic Class For Show Style Sheet Object & Print In Browser Console
* @param void
* @example
* ```
* new __STYLESHEETLIST__(): StyleSheetList
* ```
*/
var __STYLESHEETLIST__ = /** @class */ (function () {
    function __STYLESHEETLIST__() {
        new console_msg(document.styleSheets);
    }
    return __STYLESHEETLIST__;
}());
/**
* Magic Class For Show Scripts Object & Print In Browser Console
* @param void
* @example
* ```
* new __SCRIPTSLIST__(): StyleSheetList
* ```
*/
var __SCRIPTSLIST__ = /** @class */ (function () {
    function __SCRIPTSLIST__() {
        new console_msg(document.scripts);
    }
    return __SCRIPTSLIST__;
}());
/**
* Magic Class For Add HTML Entities In Document
* @param entity
* @example
* ```
* new __HTMLENTITIES__(): HTML_Entities
* ```
*/
var __HTMLENTITIES__ = /** @class */ (function () {
    function __HTMLENTITIES__(entity_code) {
        var entity = document.createElement('entity');
        entity.innerHTML = entity_code;
        document.body.append(entity);
    }
    return __HTMLENTITIES__;
}());
/**
* Magic Class For Show `Vexel.js SDK` Version
* @param typeWriter
* @typeWriter
* `console` : `document` : `alert`
* @typeVersion
* `NORMAL` : `MAJOR` or `MAIN`
* @explain
* *Type Writer*:
* * `console`: Show **Vexel.js SDK** Version In Console
*
* * `document`: Show **Vexel.js SDK** Version In Document
*
* * `alert`: Show **Vexel.js SDK** Version In API Alert
*
* *Type Version*:
* * `NORMAL`: Show The Normal **Vexel.js SDK** Version
* * `MAJOR` or `MAIN`: Show The Major Or Main **Vexel.js SDK** Version
* @example
* ```
* new __VERSION__(): void
* ```
*/
var __VERSION__ = /** @class */ (function () {
    function __VERSION__(type_writer, type_version) {
        var vexelVersion = 'Vexel.js SDK v1.0';
        var vexelMajorVersion = '1.0';
        if (type_version === 'NORMAL'.toLowerCase()) {
            if (type_writer === 'console') {
                new console_msg(vexelVersion);
            }
            else if (type_writer === 'document') {
                var typeWriter = document.createTextNode(vexelVersion);
                document.body.appendChild(typeWriter);
            }
            else if (type_writer === 'alert') {
                new msg_popup(vexelVersion);
            }
            else {
                new console_error("*".concat(type_writer, "* Is Not a Valid Type Writer, Valid Type Writers Is: [console, document, alert]"));
            }
        }
        else if (type_version === 'MAJOR'.toLowerCase() || type_version === 'MAIN'.toLowerCase()) {
            if (type_writer === 'console') {
                new console_msg(vexelMajorVersion);
            }
            else if (type_writer === 'document') {
                var typeWriter = document.createTextNode(vexelMajorVersion);
                document.body.appendChild(typeWriter);
            }
            else if (type_writer === 'alert') {
                new msg_popup(vexelMajorVersion);
            }
            else {
                new console_error("*".concat(type_writer, "* Is Not a Valid Type Writer, Valid Type Writers Is: [console, document, alert]"));
            }
        }
        else {
            new console_error("*".concat(type_version, "* Is Not a Valid Type Version, Valid Type Versions Is: [normal, major or main]"));
        }
    }
    return __VERSION__;
}());
// Info Classes
/**
* Get Current Type Of The Variable
* @param var
* @example
* ```
* new VAR_TYPE(): VarType
* ```
*/
var VAR_TYPE = /** @class */ (function () {
    function VAR_TYPE(var_type) {
        var RegExp = /\w+/ig;
        if (var_type === String(var_type)) {
            var varType = document.createTextNode("string(".concat(var_type.length, ")"));
            document.body.appendChild(varType);
        }
        else if (var_type === Number(var_type)) {
            var varType = document.createTextNode("number(".concat(var_type, ")"));
            document.body.appendChild(varType);
        }
        else if (var_type === Boolean(var_type)) {
            var varType = document.createTextNode("boolean(".concat(var_type, ")"));
            document.body.appendChild(varType);
        }
        else if (var_type === Object(var_type)) {
            var varType = document.createTextNode("object(".concat(var_type, ")"));
            document.body.appendChild(varType);
        }
        else if (var_type === Array(var_type)) {
            var varType = document.createTextNode("Array(".concat(var_type, ")"));
            document.body.appendChild(varType);
        }
    }
    return VAR_TYPE;
}());
/**
* Read & Import Current Files From URL & Path
* @param path
* @example
* ```
* new file(): path
* ```
*/
var file = /** @class */ (function () {
    function file(path) {
        var req = new XMLHttpRequest();
        req.open("GET", path);
        req.send();
        req.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        };
    }
    return file;
}());
// Array Classes/Functions
/**
* Return Array Length
* @param given_array
* @example
* ```
* new Array_legnth(): given_array
* ```
*/
var Array_legnth = /** @class */ (function () {
    function Array_legnth(given_array) {
        document.writeln("Array(".concat(given_array.length, ")"));
    }
    return Array_legnth;
}());
/**
* Merge One Or More Arrays
* @param given_array
* @example
* ```
* new Array_merge(): given_array
* ```
*/
// class Array_merge {
//     constructor(given_array: any, ...another_array_s: any) {
//         document.writeln(`${given_array + another_array_s}`.replaceAll(","," ")); // This Is Not Error
//     }
// }
/**
* Replace Old Array With New Array
* @param given_array
* @example
* ```
* new Array_merge(): given_array
* ```
*/
// class Array_replace {
//     constructor(given_array: any ,another_array: any) {
//         given_array = Array.from(another_array);
//         document.writeln(`${given_array}`.replaceAll(","," "));
//     }
// }
/**
* Reverse The Elements In an Array
* @param given_array
* @example
* ```
* new Array_reverse(): given_array
* ```
*/
// class Array_reverse {
//     constructor(given_array: any) {
//         const gv_array = Array.from(given_array).reverse();
//         document.writeln(`${gv_array}`.replaceAll(",", " "));
//     }
// }
/**
* Random The Elements In an Array
* @param given_array
* @example
* ```
* new Array_shuffle(): given_array
* ```
*/
var Array_shuffle = /** @class */ (function () {
    function Array_shuffle(given_array) {
        for (var i = 0; i < given_array.length; i++) {
            var shuffled_Array = Math.floor(Math.random() * given_array.length).toFixed();
            document.writeln(given_array[shuffled_Array]);
        }
    }
    return Array_shuffle;
}());
/**
* Remove The Firist Element In an Array
* @param given_array
* @example
* ```
* new Array_pop(): given_array
* ```
*/
var Array_pop = /** @class */ (function () {
    function Array_pop(given_array) {
        document.writeln(given_array[0] = '');
    }
    return Array_pop;
}());
/**
* Remove The Last Element In an Array
* @param given_array
* @example
* ```
* new Array_shift(): given_array
* ```
*/
var Array_shift = /** @class */ (function () {
    function Array_shift(given_array) {
        var clearedArray = Array.from(given_array).pop();
        document.writeln(clearedArray = '');
    }
    return Array_shift;
}());
// let NOTIFICATION: NOTIFICATION = {
//     name: "Ahmed",
//     header: {
//         notification_title: 'Noti',
//     }
// }
new console_msg(window);
new getDoc();
new getDate();
// new __IMPORT__("GET", "https://api.github.com/users/elzerowebschool");
// new __HTMLENTITIES__('&radic;');
new __VERSION__('console', 'normal');
var a = 1020.55;
new VAR_TYPE(a);
