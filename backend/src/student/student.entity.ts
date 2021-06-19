import { Teacher } from 'src/teacher/teacher.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @OneToMany(() => Teacher, (teacher) => teacher.student)
  teachers: Promise<Teacher[]>;
}
