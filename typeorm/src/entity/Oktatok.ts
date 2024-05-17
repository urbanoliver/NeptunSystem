import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Tantargyak } from './Tantargyak';

@Entity()
export class Oktatok {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column()
  tanszek: string;

  @OneToMany(() => Tantargyak, tantargyak => tantargyak.oktatoId)
  tantargyak: Tantargyak[];
}