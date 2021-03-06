import { EventEmitter } from '@angular/core';
import { VisDate, VisId, VisTimelineAnimationOptions, VisTimelineEventPropertiesResult, VisTimelineEvents, VisTimelineGroups, VisTimelineItems, VisTimelineOptions } from './index';
/**
 * A service to create, manage and control VisTimeline instances.
 *
 * @export
 * @class VisTimelineService
 */
export declare class VisTimelineService {
    /**
     * Fired when the current time bar redraws.
     * The rate depends on the zoom level.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    currentTimeTick: EventEmitter<any>;
    /**
     * Fired when clicked inside the Timeline.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    click: EventEmitter<any>;
    /**
     * Fired when right-clicked inside the Timeline.
     * Note that in order to prevent the context menu from showing up,
     * default behavior of the event must be stopped.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    contextmenu: EventEmitter<any>;
    /**
     * Fired when double clicked inside the Timeline.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    doubleClick: EventEmitter<any>;
    /**
     * 	Fired after the dragging of a group is finished.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    groupDragged: EventEmitter<any>;
    /**
     * Fired once after each graph redraw.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    changed: EventEmitter<any>;
    /**
     * Fired repeatedly when the timeline window is being changed.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    rangechange: EventEmitter<any>;
    /**
     * Fired once after the timeline window has been changed.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    rangechanged: EventEmitter<any>;
    /**
     * Fired after the user selects or deselects items by tapping or holding them.
     * When a use taps an already selected item, the select event is fired again.
     * Not fired when the method setSelectionis executed.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    select: EventEmitter<any>;
    /**
     * Fired when the user moves the mouse over an item.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    itemover: EventEmitter<any>;
    /**
     * Fired when the user moves the mouse out of an item.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    itemout: EventEmitter<any>;
    /**
     * Fired repeatedly when the user is dragging the custom time bar.
     * Only available when the custom time bar is enabled.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    timechange: EventEmitter<any>;
    /**
     * Fired once after the user has dragged the custom time bar.
     * Only available when the custom time bar is enabled.
     *
     * @type {EventEmitter<any>}
     * @memberOf VisTimelineService
     */
    timechanged: EventEmitter<any>;
    private timelines;
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    createWithItems(visTimeline: string, container: HTMLElement, items: VisTimelineItems, options?: VisTimelineOptions): void;
    /**
     * Creates a new timeline instance.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {HTMLElement} container The HTML element that contains the timeline view.
     * @param {VisTimelineItems} items The initial timeline items.
     * @param {VisTimelineGroups} groups The initial timeline groups.
     * @param {VisTimelineOptions} [options] The timeline options.
     *
     * @throws {Error} Thrown when timeline already exists.
     *
     * @memberOf VisTimelineService
     */
    createWithItemsAndGroups(visTimeline: string, container: HTMLElement, items: VisTimelineItems, groups: VisTimelineGroups, options?: VisTimelineOptions): void;
    /**
     * Add new vertical bar representing a custom time that can be dragged by the user.
     * The id is added as CSS class name of the custom time bar,
     * allowing to style multiple time bars differently.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String, and is new Date() by default.
     * @param {VisId} [id] Parameter id can be Number or String and is undefined by default.
     * @returns {VisId} The method returns id of the created bar.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    addCustomTime(visTimeline: string, time: VisDate, id?: VisId): VisId;
    /**
     * Adjust the visible window such that it fits all items.
     * See also function focus(id).
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    fit(visTimeline: string, options?: VisTimelineAnimationOptions): void;
    /**
     * Adjust the visible window such that the selected item is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item.
     * @param {VisTimelineAnimationOptions} [options] Options options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    focusOnId(visTimeline: string, id: VisId, options?: VisTimelineAnimationOptions): void;
    /**
     * Adjust the visible window such that the selected items are centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The item ids.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    focusOnIds(visTimeline: string, ids: VisId[], options?: VisTimelineAnimationOptions): void;
    /**
     * Get the current time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {Date} The current time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getCurrentTime(visTimeline: string): Date;
    /**
     * Retrieve the custom time from the custom time bar with given id.
     * Id is undefined by default.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} [id] The time bar id.
     * @returns {Date} The custom time.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getCustomTime(visTimeline: string, id?: VisId): Date;
    /**
     * Returns an Object with relevant properties from an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {Event} event The event.
     * @returns {VisTimelineEventPropertiesResult} Properties of an event
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getEventProperties(visTimeline: string, event: Event): VisTimelineEventPropertiesResult;
    /**
     * Get the range of all the items as an object containing min: Date and max: Date.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ min: Date, max: Date }} The min and max dates.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getItemRange(visTimeline: string): {
        min: Date;
        max: Date;
    };
    /**
     * Get an array with the ids of the currently selected items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently selected items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getSelection(visTimeline: string): VisId[];
    /**
     * Get an array with the ids of the currently visible items.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {VisId[]} The currently visible items.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getVisibleItems(visTimeline: string): VisId[];
    /**
     * Get the current visible window.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @returns {{ start: Date, end: Date }} Returns an object with properties start: Date and end: Date.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    getWindow(visTimeline: string): {
        start: Date;
        end: Date;
    };
    /**
     * 	Move the window such that given time is centered on screen.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date, Number, or String.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    moveTo(visTimeline: string, time: VisDate, options?: VisTimelineAnimationOptions): void;
    /**
     * Force a redraw of the Timeline.
     * The size of all items will be recalculated.
     * Can be useful to manually redraw when option autoResize=false and the window has been resized,
     * or when the items CSS has been changed.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    redraw(visTimeline: string): void;
    /**
     * Remove vertical bars previously added to the timeline via addCustomTime method.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id Parameter id is the ID of the custom vertical bar returned by addCustomTime method.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    removeCustomTime(visTimeline: string, id: VisId): void;
    /**
     * Set a current time.
     * This can be used for example to ensure that a client's time is synchronized
     * with a shared server time.
     * Only applicable when option showCurrentTime is true.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time time can be a Date object, numeric timestamp, or ISO date string.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setCurrentTime(visTimeline: string, time: VisDate): void;
    /**
     * 	Adjust the time of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} time Parameter time can be a Date object, numeric timestamp, or ISO date string.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setCustomTime(visTimeline: string, time: VisDate, id?: VisId): void;
    /**
     * Adjust the title attribute of a custom time bar.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {string} title Parameter title is the string to be set as title.
     *                       Use empty string to hide the title completely.
     * @param {VisId} [id] Parameter id is the id of the custom time bar, and is undefined by default.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setCustomTimeTitle(visTimeline: string, title: string, id?: VisId): void;
    /**
     * Set both groups and items at once.
     * Both properties are optional.
     * This is a convenience method for individually calling both setItems(items) and setGroups(groups).
     * Both items and groups can be an Array with Objects, a DataSet (offering 2 way data binding),
     * or a DataView (offering 1 way data binding).
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {{ groups?: VisTimelineGroups; items?: VisTimelineItems }} data The new timline data.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setData(visTimeline: string, data: {
        groups?: VisTimelineGroups;
        items?: VisTimelineItems;
    }): void;
    /**
     * Set a data set with groups for the Timeline.
     * For each of the groups, the items of the timeline are filtered on the property group,
     * which must correspond with the id of the group.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineGroups} groups a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setGroups(visTimeline: string, groups: VisTimelineGroups): void;
    /**
     * Set a data set with items for the Timeline.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineItems} items can be an Array with Objects, a DataSet (offering 2 way data binding)
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setItems(visTimeline: string, items: VisTimelineItems): void;
    /**
     * Set or update options.
     * It is possible to change any option of the timeline at any time.
     * You can for example switch orientation on the fly.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineOptions} options The new options of the timeline.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setOptions(visTimeline: string, options: VisTimelineOptions): void;
    /**
     * Select one item by its id.#
     * The currently selected items will be unselected.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId} id The id of the item that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setSelectionToId(visTimeline: string, id: VisId): void;
    /**
     * Select multiple items by their id.
     * The currently selected items will be unselected.
     * To unselect all selected items, call `setSelection([])`.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisId[]} ids The ids of the irems that should be selected.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setSelectionToIds(visTimeline: string, ids: VisId[]): void;
    /**
     * Set the current visible window.
     *
     * If the parameter value of start or end is null, the parameter will be left unchanged.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisDate} start The parameters start can be a Date, Number, or String.
     * @param {VisDate} end The parameters end can be a Date, Number, or String.
     * @param {VisTimelineAnimationOptions} [options] Optional options.
     *
     * @throws {Error} Thrown when timeline does not exist.
     *
     * @memberOf VisTimelineService
     */
    setWindow(visTimeline: string, start: VisDate, end: VisDate, options?: VisTimelineAnimationOptions): void;
    /**
     * Destroy the Timeline.
     * The timeline is removed from memory.
     * All DOM elements and event listeners are cleaned up.
     *
     * @param {string} visTimeline The timeline name/identifier.
     *
     * @memberOf VisTimelineService
     */
    destroy(visTimeline: string): void;
    /**
     * Activates an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     * @param {boolean} preventDefault Stops the default behavior of the event.
     * @returns {boolean} Returns true when the event was activated.
     *
     * @memberOf VisTimelineService
     */
    on(visTimeline: string, eventName: VisTimelineEvents, preventDefault?: boolean): boolean;
    /**
     * Deactivates an event.
     *
     * @param {string} visTimeline The timeline name/identifier.
     * @param {VisTimelineEvents} eventName The event name.
     *
     * @memberOf VisTimelineService
     */
    off(visTimeline: string, eventName: VisTimelineEvents): void;
    private doesNotExistError(visTimeline);
    private alreadyExistsError(visTimeline);
}
