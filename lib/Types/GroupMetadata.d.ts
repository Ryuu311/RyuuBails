import { Contact } from './Contact'
export type GroupParticipant = (Contact & {
isAdmin?: boolean
isSuperAdmin?: boolean
admin?: 'admin' | 'superadmin' | 'member'
})
export type ParticipantAction = 'add' | 'remove' | 'promote' | 'demote' | 'modify'
export type RequestJoinAction = 'created' | 'revoked' | 'rejected'
export type RequestJoinMethod = 'invite_link' | 'linked_group_join' | 'non_admin_add' | undefined
export interface GroupMetadata {
id: string
addressingMode: string
owner: string | undefined
ownerCountry: string, 
subject: string
/** group subject owner */
subjectOwner?: string
/** group subject modification date */
subjectTime?: number
creation?: number
desc?: string
descOwner?: string
descId?: string
/** if this group is part of a community, it returns the jid of the community to which it belongs */
linkedParent?: string
/** is set when the group only allows admins to change group settings */
restrict?: boolean
/** is set when the group only allows admins to write messages */
announce?: boolean
/** is set when the group also allows members to add participants */
memberAddMode?: boolean
/** Request approval to join the group */
joinApprovalMode?: boolean
/** is this a community */
isCommunity?: boolean
/** is this the announce of a community */
isCommunityAnnounce?: boolean
/** number of group participants */
size?: number
participants: GroupParticipant[]
picture?: string
ephemeralDuration?: number
inviteCode?: string
/** the person who added you to group or changed some setting in group */
author?: string
}
export interface WAGroupCreateResponse {
status: number
gid?: string
participants?: [{
[key: string]: {}
}]
}
export interface GroupModificationResponse {
status: number
participants?: {
[key: string]: {}
}
}