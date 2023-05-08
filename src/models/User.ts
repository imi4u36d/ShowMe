// 这里是用户信息的数据模型
export class User {
    public id!: number;
    public userName!: string;
    public password!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}