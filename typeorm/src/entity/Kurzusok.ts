import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, JoinColumn, OneToMany } from 'typeorm';
import { Tantargyak } from './Tantargyak';
import { Hallgatok } from './Hallgatok';



@Entity()
export class Kurzusok {
  
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idopont: string;


 
  @Column({ name: 'tantargyId' })
  tantargyId: number;

  @ManyToOne(() => Tantargyak, tantargyak => tantargyak.id)
  @JoinColumn({ name: 'tantargyId' })
  tantargyak: Tantargyak;

  
}
