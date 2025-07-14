// NOTE: This Library Build On Vexel-CSS Dev_v1.3
// NOTE: All Classes Constructor Don't Forget To Write Before It {new} Keyword To Run It.

// Web API
// Window Open
/**
 * Opening The Popup Window Or New Tab Includes The URL Website
 * @param URL (`String` | `undefined`)
 * @returns Website
 */
class WindowOpen {
    constructor(window_url: string | URL | undefined) {
        window.open(window_url);
    }
}
// Window Close
/**
 * Close The Current Document
 * @param void
 */
class WindowClose {
    constructor() {
        window.close();
    }
}
// Locations
/**
 * Get The Current Location & Print In Browser Console
 * @param void
 */
class getLocation {
    constructor() {
        console.log(window.location);
    }
}
/**
 * Get The Current Location Assign & Print In Browser Console
 * @param void
 */
class getLocationAssing {
    constructor() {
        console.log(window.location.assign);
    }
}
/**
 * Get The Current Location Hash & Print In Browser Console
 * @param void
 */
class getLocationHash {
    constructor() {
        console.log(window.location.hash);
    }
}
/**
 * Get The Current Location Host & Print In Browser Console
 * @param void
 */
class getLocationHost {
    constructor() {
        console.log(window.location.host);
    }
}
/**
 * Get The Current Location Hostname & Print In Browser Console
 * @param void
 */
class getLocationHostname {
    constructor() {
        console.log(window.location.hostname);
    }
}
/**
 * Get The Current Location Href & Print In Browser Console
 * @param void
 */
class getLocationHref {
    constructor() {
        console.log(window.location.href);
    }
}
/**
 * Get The Current Location Origin & Print In Browser Console
 * @param void
 */
class getLocationOrigin {
    constructor() {
        console.log(window.location.origin);
    }
}
/**
 * Get The Current Location Pathname & Print In Browser Console
 * @param void
 */
class getLocationPathname {
    constructor() {
        console.log(window.location.pathname);
    }
}
/**
 * Get The Current Location Port & Print In Browser Console
 * @param void
 */
class getLocationPort {
    constructor() {
        console.log(window.location.port);
    }
}
/**
 * Get The Current Location Protocol & Print In Browser Console
 * @param void
 */
class getLocationProtocol {
    constructor() {
        console.log(window.location.protocol);
    }
}
/**
 * Get The Current Location Reload & Print In Browser Console
 * @param void
 */
class getLocationReload {
    constructor() {
        console.log(window.location.reload);
    }
}
/**
 * Get The Current Location Replace & Print In Browser Console
 * @param void
 */
class getLocationReplace {
    constructor() {
        console.log(window.location.replace);
    }
}
/**
 * Get The Current Location Search & Print In Browser Console
 * @param void
 */
class getLocationSearch {
    constructor() {
        console.log(window.location.search);
    }
}
/**
 * Get The Current Location Tostring & Print In Browser Console
 * @param void
 */
class getLocationTostring {
    constructor() {
        console.log(window.location.toString);
    }
}
/**
 * Show Message Alert Popup In Browser
 * @param string (`any` | `undefined`)
 * @returns Alert
 */
class msg_popup {
    constructor(msg_val: string | any | undefined) {
        alert(msg_val);
    }
}
/**
 * Show Atob Message In Browser Console Like `content` In CSS
 * @param string (`any` | `undefined`)
 * @returns Atob Message
 */
class atob_msg {
    constructor(atob_val: string | any | undefined) {
        atob(atob_val);
    }
}
// Console API
/**
 * Print Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Message
 */
class console_msg {
    constructor(cons_val: string | number | string[] | number[] | any) {
        console.log(cons_val)
    }
}
/**
 * Print Warning Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Warning Message
 */
class console_warn {
    constructor(cons_val: string | number | string[] | number[] | any) {
        console.warn(cons_val)
    }
}
/**
 * Print Error Message In Browser Console
 * @param string | `number` | `string[]` | `number[]`
 * @returns Error Message
 */
class console_error {
    constructor(cons_val: string | number | string[] | number[] | any) {
        console.error(cons_val)
    }
}
/**
 * Print Table Message In Browser Console
 * @param string | `number` | `string[]`| `number[]`
 * @returns Table Message
 */
class console_table {
    constructor(cons_val: string | number | string[] | number[] | any) {
        console.table(cons_val)
    }
}
/**
 * Print Message With Information Arrow Expanded In Browser Console
 * @param any | `any[]`
 * @returns Message With Information Arrow Expanded
 */
class console_trace {
    constructor(cons_val: any | any[]) {
        console.trace(cons_val)
    }
}
/**
 * Clear Browser Console
 * @param void
 */
class console_clear {
    constructor() {
        console.clear()
    }
}
/**
 * Count Numbers For Each Element
 * @param label | `String`
 * @returns Message With Counter
 */
class console_count {
    constructor(cons_val: string) {
        console.count(cons_val)
    }
}
/**
 * Reset Message Count
 * @param label | `String`
 * @returns Message With Reset Counter
 */
class console_countReset {
    constructor(cons_val: string) {
        console.countReset(cons_val)
    }
}
/**
 * Print Grouping Message In Browser Console
 * @param any | `any[]`
 * @returns Grouping Message
 */
class console_group {
    constructor(cons_val: any | any[]) {
        console.group(cons_val)
    }
}
/**
 * Print Collapsed Grouping Message In Browser Console
 * @param any | `any[]`
 * @returns Collapsed Grouping Message
 */
class console_groupCollapsed {
    constructor(cons_val: any | any[]) {
        console.groupCollapsed(cons_val)
    }
}
/**
 * Get Group End
 * @param void
 */
class console_groupEnd {
    constructor() {
        console.groupEnd()
    }
}
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
class printf {
    constructor(printf_val: string | any) {
        document.writeln(printf_val);
    }
}
/**
 * Print Text Only In Document
 * @param string
 * @example
 * ```
 * new println('YOUR_TEXT')
 * ```
 * @returns Text
 */
class println {
   constructor(println_val: string) {
        document.writeln(println_val);
    }
}
// Print Document
/**
 * Print The Current Document
 * @param void
 * @example
 * ```
 * new printDoc(): void
 * ```
 */
class printDoc {
    constructor() {
        print();
    }
}
// Events
const customEvents = {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
};
const nativeEvents = ['click', 'dblclick', 'mouseup', 'mousedown', 'contextmenu', 'mousewheel', 'DOMMouseScroll', 'mouseover', 'mouseout', 'mousemove', 'selectstart', 'selectend', 'keydown', 'keypress', 'keyup', 'orientationchange', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'pointerdown', 'pointermove', 'pointerup', 'pointerleave', 'pointercancel', 'gesturestart', 'gesturechange', 'gestureend', 'focus', 'blur', 'change', 'reset', 'select', 'submit', 'focusin', 'focusout', 'load', 'unload', 'beforeunload', 'resize', 'move', 'DOMContentLoaded', 'readystatechange', 'error', 'abort', 'scroll'];

/**
 * Get The All Current Document Events
 * @param void
 * @example
 * ```
 * new getEvents(): void
 * ```
 */
class getEvents {
    constructor() {
        new console_msg(nativeEvents);
    }
}
/**
 * Get The All Current Document Events Length
 * @param void
 * @example
 * ```
 * new getEventsLength(): void
 * ```
 */
class getEventsLength {
    constructor() {
        new console_msg(nativeEvents.length);
    }
}

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
class getClickEvent {
    constructor() {
        new console_msg(nativeEvents[0]);
    }
}
// dblclick Event
/**
 * Get `dblclick` Event To Add In `addEventListener` Function To Use It When Callback `getdbClickEvent` Function
 * @param void
 * @example
 * ```
 * new getdbClickEvent(): void
 * ```
 */
class getdbClickEvent {
    constructor() {
        new console_msg(nativeEvents[1]);
    }
}
// mouseup Event
/**
 * Get `mouseup` Event To Add In `addEventListener` Function To Use It When Callback `getMouseupEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseupEvent(): void
 * ```
 */
class getMouseupEvent {
    constructor() {
        new console_msg(nativeEvents[2]);
    }
}
// mousedown Event
/**
 * Get `mousedown` Event To Add In `addEventListener` Function To Use It When Callback `getMousedownEvent` Function
 * @param void
 * @example
 * ```
 * new getMousedownEvent(): void
 * ```
 */
class getMousedownEvent {
    constructor() {
        new console_msg(nativeEvents[3]);
    }
}
// contextmenu Event
/**
 * Get `contextmenu` Event To Add In `addEventListener` Function To Use It When Callback `getContextmenuEvent` Function
 * @param void
 * @example
 * ```
 * new getContextmenuEvent(): void
 * ```
 */
class getContextmenuEvent {
    constructor() {
        new console_msg(nativeEvents[4]);
    }
}
// mousewheel Event
/**
 * Get `mousewheel` Event To Add In `addEventListener` Function To Use It When Callback `getMousewheelEvent` Function
 * @param void
 * @example
 * ```
 * new getMousewheelEvent(): void
 * ```
 */
class getMousewheelEvent {
    constructor() {
        new console_msg(nativeEvents[5]);
    }
}
// DOMMouseScroll Event
/**
 * Get `DOMMouseScroll` Event To Add In `addEventListener` Function To Use It When Callback `getDOMMouseScrollEvent` Function
 * @param void
 * @example
 * ```
 * new getDOMMouseScrollEvent(): void
 * ```
 */
class getDOMMouseScrollEvent {
    constructor() {
        new console_msg(nativeEvents[6]);
    }
}
// mouseover Event
/**
 * Get `mouseover` Event To Add In `addEventListener` Function To Use It When Callback `getMouseoverEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseoverEvent(): void
 * ```
 */
class getMouseoverEvent {
    constructor() {
        new console_msg(nativeEvents[7]);
    }
}
// mouseout Event
/**
 * Get `mouseout` Event To Add In `addEventListener` Function To Use It When Callback `getMouseoutEvent` Function
 * @param void
 * @example
 * ```
 * new getMouseoutEvent(): void
 * ```
 */
class getMouseoutEvent {
    constructor() {
        new console_msg(nativeEvents[8]);
    }
}
// mousemove Event
/**
 * Get `mousemove` Event To Add In `addEventListener` Function To Use It When Callback `getMousemoveEvent` Function
 * @param void
 * @example
 * ```
 * new getMousemoveEvent(): void
 * ```
 */
class getMousemoveEvent {
    constructor() {
        new console_msg(nativeEvents[9]);
    }
}
// selectstart Event
/**
 * Get `selectstart` Event To Add In `addEventListener` Function To Use It When Callback `getSelectstartEvent` Function
 * @param void
 * @example
 * ```
 * new getSelectstartEvent(): void
 * ```
 */
class getSelectstartEvent {
    constructor() {
        new console_msg(nativeEvents[10]);
    }
}
// selectend Event
/**
 * Get `selectend` Event To Add In `addEventListener` Function To Use It When Callback `getSelectendEvent` Function
 * @param void
 * @example
 * ```
 * new getSelectendEvent(): void
 * ```
 */
class getSelectendEvent {
    constructor() {
        new console_msg(nativeEvents[11]);
    }
}
// keydown Event
/**
 * Get `keydown` Event To Add In `addEventListener` Function To Use It When Callback `getKeydownEvent` Function
 * @param void
 * @example
 * ```
 * new getKeydownEvent(): void
 * ```
 */
class getKeydownEvent {
    constructor() {
        new console_msg(nativeEvents[12]);
    }
}
// keypress Event
/**
 * Get `keypress` Event To Add In `addEventListener` Function To Use It When Callback `getKeypressEvent` Function
 * @param void
 * @example
 * ```
 * new getKeypressEvent(): void
 * ```
 */
class getKeypressEvent {
    constructor() {
        new console_msg(nativeEvents[13]);
    }
}
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
class getDoc {
    constructor() {
        new console_msg(document)
    }
}
/**
 * Get `Document_URL` Function Return The Document `[URL]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocURL(): void
 * ```
 */
class getDocURL {
    constructor() {
        new console_msg(document.URL)
    }
}
/**
 * Get `Document_Base_URL` Function Return The Document `[URL]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocBaseURL(): void
 * ```
 */
class getDocBaseURL {
    constructor() {
        new console_msg(document.baseURI)
    }
}
/**
 * Get `Document_Root_Node` Function Return The Document `[FULL_DOC]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocRootNode(): void
 * ```
 */
class getDocRootNode {
    constructor() {
        new console_msg(document.getRootNode())
    }
}
/**
 * Get `Document_Type` Function Return The Document `[DOC_TYPE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocType(): void
 * ```
 */
class getDocType {
    constructor() {
        new console_msg(document.contentType)
    }
}
/**
 * Get `Document_Head` Function Return The Document `[DOC_HEAD_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocHead(): void
 * ```
 */
class getDocHead {
    constructor() {
        new console_msg(document.head)
    }
}
/**
 * Get `Document_Body` Function Return The Document `[DOC_BODY_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocBody(): void
 * ```
 */
class getDocBody {
    constructor() {
        new console_msg(document.body)
    }
}
/**
 * Get `Document_Type_Element` Function Return The Document `[DOC_TYPE_ELEMENT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocTypeElement(): void
 * ```
 */
class getDocTypeElement {
    constructor() {
        new console_msg(document.doctype)
    }
}
/**
 * Get `Document_Child_Nodes` Function Return The Document `[DOC_CHILD_NODES]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocChildNodes(): void
 * ```
 */
class getDocChildNodes {
    constructor() {
        new console_msg(document.childNodes)
    }
}
/**
 * Get `Document_Children` Function Return The Document `[DOC_CHILDREN]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocChildren(): void
 * ```
 */
class getDocChildren {
    constructor() {
        new console_msg(document.children)
    }
}
/**
 * Get `Document_Compat_Mode` Function Return The Document `[DOC_COMPAT_MODE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCompatMode(): void
 * ```
 */
class getDocCompatMode {
    constructor() {
        new console_msg(document.compatMode)
    }
}
/**
 * Get `Document_Current_Script` Function Return The Document `[DOC_CURRENT_SCRIPT]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCurrentScript(): void
 * ```
 */
class getDocCurrentScript {
    constructor() {
        new console_msg(document.currentScript)
    }
}
/**
 * Get `Document_Cdata_Section_Node` Function Return The Document `[DOC_CDATA_SECTION_NODE]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocCdataSectionNode(): void
 * ```
 */
class getDocCdataSectionNode {
    constructor() {
        new console_msg(document.CDATA_SECTION_NODE)
    }
}
/**
 * Get `Document_Encoding` Function Return The Document `[DOC_ENCODING]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocEncoding(): void
 * ```
 */
class getDocEncoding {
    constructor() {
        new console_msg(document.characterSet)
    }
}
/**
 * Get `Document_First_Child` Function Return The Document `[DOC_FIRST_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocFirstChild(): void
 * ```
 */
class getDocFirstChild {
    constructor() {
        new console_msg(document.firstChild)
    }
}
/**
 * Get `Document_First_Element_Child` Function Return The Document `[DOC_FIRST_ELEMENT_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocFirstElementChild(): void
 * ```
 */
class getDocFirstElementChild {
    constructor() {
        new console_msg(document.firstElementChild)
    }
}
/**
 * Get `Document_Last_Child` Function Return The Document `[DOC_LAST_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastChild(): void
 * ```
 */
class getDocLastChild {
    constructor() {
        new console_msg(document.lastChild)
    }
}
/**
 * Get `Document_Last_Element_Child` Function Return The Document `[DOC_LAST_ELEMENT_CHILD]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastElementChild(): void
 * ```
 */
class getDocLastElementChild {
    constructor() {
        new console_msg(document.lastElementChild)
    }
}
/**
 * Get `Document_Last_Modified` Function Return The Document `[DOC_LAST_Modified]` & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDocLastModified(): void
 * ```
 */
class getDocLastModified {
    constructor() {
        new console_msg(document.lastModified)
    }
}
// Date
/**
 * Return Current Date & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDate(): void
 * ```
 */
class getDate {
    constructor() {
        new console_msg(new Date())
    }
}
/**
 * Return Current Time Value In Milliseconds Since Midnight, January 1, 1970 UTC & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getTime(): void
 * ```
 */
class getTime {
    constructor() {
        new console_msg(new Date().getTime())
    }
}
/**
 * Return Current Year In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getYear(): void
 * ```
 */
class getYear {
    constructor() {
        new console_msg(new Date().getFullYear())
    }
}
/**
 * Return Current Day Of The Month In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDay_M(): void
 * ```
 */
class getDay_M {
    constructor() {
        new console_msg(new Date().getDate())
    }
}
/**
 * Return Current Day Of The Week In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getDay(): void
 * ```
 */
class getDay {
    constructor() {
        new console_msg(new Date().getDay())
    }
}
/**
 * Return Current Hours In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getHours(): void
 * ```
 */
class getHours {
    constructor() {
        new console_msg(new Date().getHours())
    }
}
/**
 * Return Current Universal Coordinated Time (UTC) Hours In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Hours(): void
 * ```
 */
class getUTC_Hours {
    constructor() {
        new console_msg(new Date().getUTCHours())
    }
}
/**
 * Return Current Minutes In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getMinutes(): void
 * ```
 */
class getMinutes {
    constructor() {
        new console_msg(new Date().getMinutes())
    }
}
/**
 * Return Current Universal Coordinated Time (UTC) Minutes In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Minutes(): void
 * ```
 */
class getUTC_Minutes {
    constructor() {
        new console_msg(new Date().getUTCMinutes())
    }
}
/**
 * Return Current Milliseconds In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getMilliseconds(): void
 * ```
 */
class getMilliseconds {
    constructor() {
        new console_msg(new Date().getMilliseconds())
    }
}
/**
 * Return Current Universal Coordinated Time (UTC) Milliseconds In Local Time & Print In Browser Console
 * @param void
 * @example
 * ```
 * new getUTC_Milliseconds(): void
 * ```
 */
class getUTC_Milliseconds {
    constructor() {
        new console_msg(new Date().getUTCMilliseconds())
    }
}
// Set & Random Things
/**
 * Return Genereator ID
 * @param void
 * @example
 * ```
 * new ID_Genereator(): string | number | any
 * ```
 */
class ID_Genereator {
    constructor(btoa_val: string | any) {
        document.writeln(window.btoa(btoa_val))
    }
}
/**
 * Return Random Genereator ID With `Math` Object
 * @param void
 * @example
 * ```
 * new random_ID_Genereator(): void
 * ```
 */
class random_ID_Genereator {
    constructor() {
        document.writeln(window.btoa(`${Math.random()}`))
    }
}

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
class setCounter {
    constructor(counter_Time: number | undefined) {
        let counter: number = 0;
        setInterval(() => {
            new console_msg(counter++)
        }, counter_Time);
    }
}
/**
 * Return a Same `setCounter()` Function But With End Of Counter & Print In Browser Console
 * @param Milliseconds
 * @param Counter_End
 * @example
 * ```
 * new setTimeCounter(): Counter_Timer | Counter_End
 * ```
 */
class setTimeCounter {
    constructor(counter_Timer: number | undefined, counter_end: number | undefined) {
        let counter: number = 0;
        let interval_Counter =  setInterval(() => {
            new console_msg(counter++)

            if (counter === counter_end) {
                clearInterval(interval_Counter);
            }
        }, counter_Timer);
    }
}
// Theme
let theme: string = 'Dark';
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
class setTheme {
    constructor(theme_val: string | undefined) {
        if (theme === 'Dark') {
            document.body.style.background = 'red';
        } else if(theme !== 'Dark') {
            // # Block Of Code
        } else if(theme === theme_val) {
            // # Block Of Code
        }
    }
}

// Interfaces
// Notifications
/**
* Create a New `API` Notification
* @param String
* @example
* ```
* new setTheme(): Theme_Name
* ```
*/
interface NOTIFICATION {
    /**
    * Set The Main Name Of Notification 
    * @param String
    * @example
    * ```
    * new setTheme(): Theme_Name
    * ```
    */
    name: string,
    /**
    * Set The Main Header Of Notification
    * @param Object
    * @example
    * ```
    * new setTheme(): Theme_Name
    * ```
    */
    header: {
        /**
        * Set The Main Icon Of Notification
        * @param string | `path`
        * @example
        * ```
        * new setTheme(): Theme_Name
        * ```
        */
        notification_icon?: string, // I Don't Use icon` Name Because Identical Error
        /**
        * Set The Main Title Of Notification
        * @param string
        * @example
        * ```
        * new setTheme(): Theme_Name
        * ```
        */
        notification_title: string,
        /**
        * Set The Main Close Icon Of Notification
        * @param string
        * @example
        * ```
        * new setTheme(): Theme_Name
        * ```
        */
        notification_close_icon?: boolean,
    },
    /**
    * Set The Main Description Content Of Notification
    * @param string
    * @example
    * ```
    * new setTheme(): Theme_Name
    * ```
    */
    content?: string,
    /**
    * Set The Main Buttons Section Of Notification
    * @param void
    * @example
    * ```
    * new setTheme(): Theme_Name
    * ```
    */
    btns_section?: {
        /**
        * Set The Main Close Button Of Notification
        * @param boolean
        * @example
        * ```
        * new setTheme(): Theme_Name
        * ```
        */
        readonly close_btn?: boolean,
        /**
        * Set The Main Save Button Of Notification
        * @param boolean
        * @example
        * ```
        * new setTheme(): Theme_Name
        * ```
        */
        readonly save_btn?: boolean,
    },
    /**
    * Set The Position Of Notification
    * @param string
    * @example
    * ```
    * new setTheme(): Theme_Name
    * ```
    */
    place?: string,
}
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
class __CLONE__ {
    constructor(clone_char: string | any ,clone_val: string | any) {
        document.writeln(`${clone_char}${clone_val}${clone_char}`);
    }
}
// Cut
/**
* Magic Class For Cut From Any Place In Text
* @param string | `any`
* @example
* ```
* new __CUT__(): string | any
* ```
*/
class __CUT__ {
    constructor(cut_pos: number, cut_txt: string) {
        document.writeln(`${cut_txt.slice(cut_pos)}`);
    }
}
/// API & Data
/**
* Magic Class For Fetching Data From URL & Print In Browser Console
* @param string | `URL` | `boolean` | `any`
* @example
* ```
* new __IMPORT__(): Data
* ```
*/
class __IMPORT__ {
    constructor(fetch_method: string ,fetch_url: string | URL, fetch_type?: boolean | any) {
        let request = new XMLHttpRequest();
        request.open(fetch_method, fetch_url);
        request.send();

        request.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                new console_msg(this.responseText);
            }

            if (fetch_type === true) {
                let jsonReq = JSON.parse(this.responseText);
                new console_msg(jsonReq);
            }
        }
    }
}
/**
* Magic Class For Import & Include Another Javascript[JS] Files & Components
* @param string
* @deprecated
* @example
* ```
* new __INCLUDE__(): String
* ```
*/
class __INCLUDE__ { // Iam Working About This Issue, In Next Version I Hope To Solve It
    constructor(import_path: string) {
        const import_var: any = `<script src="${import_path}"></script>` as unknown;
        document.body.append(import_var);
    }
}
/**
* Magic Class For Show Style Sheet Object & Print In Browser Console
* @param void
* @example
* ```
* new __STYLESHEETLIST__(): StyleSheetList
* ```
*/
class __STYLESHEETLIST__ {
    constructor() {
        new console_msg(document.styleSheets);
    }
}
/**
* Magic Class For Show Scripts Object & Print In Browser Console
* @param void
* @example
* ```
* new __SCRIPTSLIST__(): StyleSheetList
* ```
*/
class __SCRIPTSLIST__ {
    constructor() {
        new console_msg(document.scripts);
    }
}
/**
* Magic Class For Add HTML Entities In Document
* @param entity
* @example
* ```
* new __HTMLENTITIES__(): HTML_Entities
* ```
*/
class __HTMLENTITIES__ {
    constructor(entity_code: any) {
        let entity = document.createElement('entity');
        entity.innerHTML = entity_code;
        document.body.append(entity);
    }
}
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
class __VERSION__ {
    constructor(type_writer: string, type_version: string) {
        let vexelVersion = 'Vexel.js SDK v1.0';
        let vexelMajorVersion = '1.0';
        if (type_version === 'NORMAL'.toLowerCase()) {
                if (type_writer === 'console') {
                    new console_msg(vexelVersion);
                } else if (type_writer === 'document') {
                    let typeWriter = document.createTextNode(vexelVersion);
                    document.body.appendChild(typeWriter);
                } else if (type_writer === 'alert') {
                    new msg_popup(vexelVersion);
                } else {
                    new console_error(`*${type_writer}* Is Not a Valid Type Writer, Valid Type Writers Is: [console, document, alert]`);
                }
            } else if(type_version === 'MAJOR'.toLowerCase() || type_version === 'MAIN'.toLowerCase()) {
                if (type_writer === 'console') {
                    new console_msg(vexelMajorVersion);
                } else if (type_writer === 'document') {
                    let typeWriter = document.createTextNode(vexelMajorVersion);
                    document.body.appendChild(typeWriter);
                } else if (type_writer === 'alert') {
                    new msg_popup(vexelMajorVersion);
                } else {
                    new console_error(`*${type_writer}* Is Not a Valid Type Writer, Valid Type Writers Is: [console, document, alert]`);
                }
            } else {
                new console_error(`*${type_version}* Is Not a Valid Type Version, Valid Type Versions Is: [normal, major or main]`);
            }
        }
}
// Info Classes
/**
* Get Current Type Of The Variable
* @param var
* @example
* ```
* new VAR_TYPE(): VarType
* ```
*/
class VAR_TYPE {
    constructor(var_type: any) {
        let RegExp = /\w+/ig;
        if (var_type === String(var_type)) {
            let varType = document.createTextNode(`string(${var_type.length})`);
            document.body.appendChild(varType);
        } else if (var_type === Number(var_type)) {
            let varType = document.createTextNode(`number(${var_type})`);
            document.body.appendChild(varType);
        } else if (var_type === Boolean(var_type)) {
            let varType = document.createTextNode(`boolean(${var_type})`);
            document.body.appendChild(varType);
        } else if (var_type === Object(var_type)) {
            let varType = document.createTextNode(`object(${var_type})`);
            document.body.appendChild(varType);
        } else if (var_type === Array(var_type)) {
            let varType = document.createTextNode(`Array(${var_type})`);
            document.body.appendChild(varType);
        }
    }
}
/**
* Read & Import Current Files From URL & Path
* @param path
* @example
* ```
* new file(): path
* ```
*/
class file {
    constructor(path: string) {
        let req = new XMLHttpRequest();
        req.open("GET", path);
        req.send();

        req.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);
            }
        }
    }
}
// Array Classes/Functions
/**
* Return Array Length
* @param given_array
* @example
* ```
* new Array_legnth(): given_array
* ```
*/
class Array_legnth {
    constructor(given_array: any) {
        document.writeln(`Array(${given_array.length})`)
    }
}
/**
* Merge One Or More Arrays
* @param given_array
* @example
* ```
* new Array_merge(): given_array
* ```
*/
class Array_merge {
    constructor(given_array: any, ...another_array_s: any) {
        document.writeln(`${given_array + another_array_s}`.replaceAll(","," ")); // This Is Not Error
    }
}
/**
* Replace Old Array With New Array
* @param given_array
* @example
* ```
* new Array_replace(): given_array
* ```
*/
class Array_replace {
    constructor(given_array: any ,another_array: any) {
        given_array = Array.from(another_array);
        document.writeln(`${given_array}`.replaceAll(","," "));
    }
}
/**
* Reverse The Elements In an Array
* @param given_array
* @example
* ```
* new Array_reverse(): given_array
* ```
*/
class Array_reverse {
    constructor(given_array: any) {
        const gv_array = Array.from(given_array).reverse();
        document.writeln(`${gv_array}`.replaceAll(",", " "));
    }
}
/**
* Random The Elements In an Array
* @param given_array
* @example
* ```
* new Array_shuffle(): given_array
* ```
*/
class Array_shuffle {
    constructor(given_array: any) {
        for (let i = 0; i < given_array.length; i++) {
            let shuffled_Array = Math.floor(Math.random() * given_array.length).toFixed();
            document.writeln(given_array[shuffled_Array]);
        }
    }
}
/**
* Remove The Firist Element In an Array
* @param given_array
* @example
* ```
* new Array_pop(): given_array
* ```
*/
class Array_pop {
    constructor(given_array: any) {
        document.writeln(given_array[0] = '');
    }
}
/**
* Remove The Last Element In an Array
* @param given_array
* @example
* ```
* new Array_shift(): given_array
* ```
*/
class Array_shift {
    constructor(given_array: any) {
        let clearedArray = Array.from(given_array).pop();
        document.writeln(clearedArray = '');
    }
}
