import { Light } from './light';

export class HueGroup
{
  public constructor(
    public Name: string,
    public Lights:Light[]
  )
  {}
}
