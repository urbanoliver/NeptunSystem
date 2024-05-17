import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { Hallgatok } from './Hallgatok';
import { Tantargyak } from './Tantargyak';
import { Kurzusok } from './Kurzusok';

@Entity()
export class Erdemjegyek {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  erdemjegy: number;

  @Column({ name: 'tantargyId' })
  tantargyId: number;

  @ManyToOne(() => Tantargyak, tantargyak => tantargyak.id)
  @JoinColumn({ name: 'tantargyId' })
  tantargyak: Tantargyak;


  @Column({ name: 'kurzusId' })
  kurzusId: number;

  @ManyToOne(() => Kurzusok, kurzusok => kurzusok.id)
  @JoinColumn({ name: 'kurzusId' })
  kurzus: Kurzusok;
 

  @Column({ name: 'hallgatoId' })
  hallgatoId: number;

  @ManyToOne(() => Hallgatok, hallgatok => hallgatok.id)
  @JoinColumn({ name: 'hallgatoId' })
  hallgato: Hallgatok; 

}
