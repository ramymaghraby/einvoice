import { Student } from 'src/student/student.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @ManyToOne(() => Student, (student) => student.teachers)
  @JoinColumn({referencedColumnName: 'id'})
  student: Promise<Student>;
}
