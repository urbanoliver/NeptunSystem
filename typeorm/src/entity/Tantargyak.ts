import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany} from "typeorm"
import { Oktatok } from "./Oktatok"
import { Kurzusok } from "./Kurzusok"
import { Erdemjegyek } from "./Erdemjegyek"

@Entity()
export class Tantargyak {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nev: string;

  @Column({ name: 'oktatoId' })
  oktatoId: number;

  @ManyToOne(() => Oktatok, oktatok => oktatok.id)
  @JoinColumn({ name: 'oktatoId' })
  oktato: Oktatok;

  @OneToMany(() => Kurzusok, kurzusok => kurzusok.id)
  kurzusok: Kurzusok[];

  @OneToMany(() => Erdemjegyek, erdemjegyek => erdemjegyek.id)
  erdemjegyek: Erdemjegyek[];
}