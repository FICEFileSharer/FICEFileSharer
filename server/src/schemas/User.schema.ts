import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  Email: string

  @Prop({ required: true })
  Name: string

  @Prop({ required: false })
  ProfilePictureURL?: string
}

export const UserSchema = SchemaFactory.createForClass(User)
