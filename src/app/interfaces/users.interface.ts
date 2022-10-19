export interface IUser {
    id?: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string
}

export interface IUserList {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<IUser>,
    support: IUserListSupport
}

export interface IUserListState {
    usersList: IUserList,
    isLoading: boolean
}

export interface IUserListSupport {
    url: string,
    text: string
}
