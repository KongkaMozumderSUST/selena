import { Color, Quaternion, Vector3 } from "three";
import { degToRad } from "three/src/math/MathUtils";
import { LEFT,UP } from "./constants";
export function rotationQuaternionForCoordinates(lat,long) {
  const q1 = new Quaternion().setFromAxisAngle(LEFT, degToRad(lat - 90)); //latitude
  const q2 = new Quaternion().setFromAxisAngle(UP, degToRad(long)); //longitude
  return q2.multiply(q1);
}
