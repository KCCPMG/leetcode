/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null && list2 === null) return null;

    let h = new ListNode();
    if (list1 || list2) {
        if (list1 && (!list2  || list1.val < list2.val)) {
            h.val = list1.val;
            list1 = list1.next;
        } else {
            h.val = list2.val;
            list2 = list2.next;
        }
    }
    let c = h;
    while (list1 || list2) {
        if (list1 && (!list2  || list1.val < list2.val)) {
            c.next = new ListNode(list1.val);
            list1 = list1.next;
        } else {
            c.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        c = c.next;
    }
    return h;
};