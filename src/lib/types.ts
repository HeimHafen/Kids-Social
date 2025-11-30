export type UserRole = "parent" | "kid" | "educator";

export interface User {
  id: string;
  email: string | null;
  role: UserRole;
  createdAt: string; // ISO
}

export interface Household {
  id: string;
  name: string;
  ownerParentId: string;
  createdAt: string;
}

export type HouseholdMemberRole = "parent" | "kid";

export interface HouseholdMember {
  id: string;
  householdId: string;
  userId: string;
  role: HouseholdMemberRole;
}

export interface KidProfile {
  id: string;
  userId: string; // User mit role = 'kid'
  nickname: string;
  birthYear: number;
  avatarId: string;
  createdAt: string;
}

export type ConnectionStatus =
  | "pending_parent_approval"
  | "active"
  | "blocked";

export interface Connection {
  id: string;
  kidAId: string;
  kidBId: string;
  status: ConnectionStatus;
  createdByParentId: string;
  createdAt: string;
}

export type GroupType = "class" | "club" | "family" | "custom";

export interface Group {
  id: string;
  name: string;
  type: GroupType;
  createdByUserId: string;
  createdAt: string;
}

export type GroupMemberRole = "member" | "moderator";

export interface GroupMember {
  id: string;
  groupId: string;
  kidId: string;
  role: GroupMemberRole;
}

export type PostVisibility = "friends" | "group";

export interface Post {
  id: string;
  authorKidId: string;
  groupId: string | null;
  visibility: PostVisibility;
  text: string;
  mediaUrl: string | null;
  badge: string | null; // z.B. 'creative', 'question'
  createdAt: string;
}

export interface PostReaction {
  id: string;
  postId: string;
  kidId: string;
  emoji: string; // 😄, 🔥, ...
  createdAt: string;
}

export type ReportTargetType = "post" | "message" | "user";
export type ReportStatus = "open" | "in_review" | "resolved";

export interface Report {
  id: string;
  reportedByKidId: string;
  targetType: ReportTargetType;
  targetId: string;
  reason: string;
  status: ReportStatus;
  visibleToParent: boolean;
  createdAt: string;
}