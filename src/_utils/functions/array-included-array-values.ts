import { AnyType } from '../../_types/anytype'

export const arrayIncludesArrayValues = (arr1: AnyType[], arr2: AnyType[]) => arr1.some(value => arr2.includes(value))
