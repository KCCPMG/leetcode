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

    let head = new ListNode();
    if (list1 || list2) {
        if (list1 && (!list2  || list1.val < list2.val)) {
            head.val = list1.val;
            list1 = list1.next;
        } else {
            head.val = list2.val;
            list2 = list2.next;
        }
    }
    let cursor = head;
    while (list1 || list2) {
        if (list1 && (!list2  || list1.val < list2.val)) {
            cursor.next = new ListNode(list1.val);
            cursor = cursor.next;
            list1 = list1.next;
        } else {
            cursor.next = new ListNode(list2.val);
            cursor = cursor.next;
            list2 = list2.next;
        }
    }
    return head;
};