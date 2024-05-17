import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Erdemjegyek } from './Erdemjegyek';
import { Tantargyak } from './Tantargyak';
import { Kurzusok } from './Kurzusok';

@Entity()
export class Hallgatok {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column()
  tankor: string;

  @OneToMany(() => Erdemjegyek, erdemjegyek => erdemjegyek.hallgatoId)
  erdemjegyek: Erdemjegyek[];

  @OneToMany(() => Tantargyak, tantargyak => tantargyak.id)
  tantargyak: Tantargyak[];

  @OneToMany(() => Kurzusok, kurzusok => kurzusok.tantargyId)
  kurzusok: Kurzusok[];
}
