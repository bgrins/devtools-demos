// Have some JS that will be repeated enough times to hit certain size thresholds
window.JS_STRING = `function __ZN5physx23PxVehicleRepXSerializerINS_18PxVehicleDriveTankEE12fileToObjectERNS_9XmlReaderERNS_18XmlMemoryAllocatorERNS_23PxRepXInstantiationArgsEPNS_12PxCollectionE(i14, i1, i12, i10, i11, i15) {
 i14 = i14 | 0;
 i1 = i1 | 0;
 i12 = i12 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i15 = i15 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i13 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 592 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abort();
 i7 = i13 + 576 | 0;
 i8 = i13;
 do if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 4095](i12, 1120585, i8) | 0) {
  i1 = HEAP32[i8 >> 2] | 0;
  HEAP32[i7 >> 2] = i1;
  if (i1) if (HEAP8[i1 >> 0] | 0) {
   i1 = _strtoull(i1, i7, 10) | 0;
   i2 = tempRet0;
   if ((i1 | 0) == 0 & (i2 | 0) == 0) break;
   i4 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 40 >> 2] & 4095](i15, i1, i2) | 0;
   if (!i4) {
    __ZN5physx2Sn11ReportErrorENS0_15PxRepXErrorCode4EnumEPKcS4_i(2, 1120585, 1120603, 130) | 0;
    break;
   }
   do if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 4095](i12, 1120778, i8) | 0) {
    i1 = HEAP32[i8 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    if (i1) if (HEAP8[i1 >> 0] | 0) {
     i5 = _strtoul(i1, i7, 10) | 0;
     if (!i5) break;
     if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 4095](i12, 1120788, i8) | 0) {
      i1 = HEAP32[i8 >> 2] | 0;
      HEAP32[i7 >> 2] = i1;
      if (!i1) i1 = 0; else if (!(HEAP8[i1 >> 0] | 0)) i1 = 0; else i1 = _strtoul(i1, i7, 10) | 0;
     } else i1 = 0;
     i9 = __ZN5physx22PxVehicleWheelsSimData8allocateEj(i5) | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 4095](i12);
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 4095](i12, 1122511) | 0) {
      HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
      HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
      __ZN5physx2Sn17readAllPropertiesINS_22PxVehicleWheelsSimDataEEEvNS_23PxRepXInstantiationArgsERNS_9XmlReaderEPT_RNS_18XmlMemoryAllocatorERNS_12PxCollectionE(i7, i12, i9, i10, i15);
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 4095](i12);
     HEAPF32[i8 + 80 >> 2] = Math_fround(1.0);
     HEAPF32[i8 + 84 >> 2] = Math_fround(500.0);
     HEAPF32[i8 + 88 >> 2] = Math_fround(600.0);
     HEAPF32[i8 + 92 >> 2] = Math_fround(.150000006);
     HEAPF32[i8 + 96 >> 2] = Math_fround(2.0);
     HEAPF32[i8 + 100 >> 2] = Math_fround(.349999994);
     HEAPF32[i8 >> 2] = Math_fround(0.0);
     HEAPF32[i8 + 4 >> 2] = Math_fround(.800000011);
     HEAPF32[i8 + 8 >> 2] = Math_fround(.330000013);
     HEAPF32[i8 + 12 >> 2] = Math_fround(1.0);
     HEAPF32[i8 + 16 >> 2] = Math_fround(1.0);
     HEAPF32[i8 + 20 >> 2] = Math_fround(.800000011);
     HEAP32[i8 + 64 >> 2] = 3;
     HEAPF32[i8 + 104 >> 2] = Math_fround(1.0);
     HEAPF32[i8 + 108 >> 2] = Math_fround(.00166666671);
     HEAPF32[i8 + 240 >> 2] = Math_fround(4.0);
     HEAP32[i8 + 244 >> 2] = 7;
     HEAPF32[i8 + 248 >> 2] = Math_fround(.5);
     HEAPF32[i8 + 112 >> 2] = Math_fround(-4.0);
     HEAPF32[i8 + 116 >> 2] = Math_fround(0.0);
     HEAPF32[i8 + 120 >> 2] = Math_fround(4.0);
     HEAPF32[i8 + 124 >> 2] = Math_fround(2.0);
     HEAPF32[i8 + 128 >> 2] = Math_fround(1.5);
     HEAPF32[i8 + 132 >> 2] = Math_fround(1.10000002);
     HEAPF32[i8 + 136 >> 2] = Math_fround(1.0);
     i2 = i8 + 140 | 0;
     i3 = i2 + 100 | 0;
     do {
      HEAP32[i2 >> 2] = 0;
      i2 = i2 + 4 | 0;
     } while ((i2 | 0) < (i3 | 0));
     HEAPF32[i8 + 256 >> 2] = Math_fround(10.0);
     HEAP32[i8 + 260 >> 2] = 1;
     HEAP32[i8 + 264 >> 2] = 5;
     i2 = 0;
     do {
      HEAPF32[i8 + 272 + (i2 << 2) >> 2] = Math_fround(.649999976);
      HEAPF32[i8 + 400 + (i2 << 2) >> 2] = Math_fround(.5);
      i2 = i2 + 1 | 0;
     } while ((i2 | 0) != 32);
     HEAPF32[i8 + 276 >> 2] = Math_fround(.150000006);
     HEAPF32[i8 + 400 >> 2] = Math_fround(2.0);
     HEAPF32[i8 + 528 >> 2] = Math_fround(.449999988);
     HEAPF32[i8 + 532 >> 2] = Math_fround(.5);
     HEAPF32[i8 + 536 >> 2] = Math_fround(.5);
     HEAPF32[i8 + 540 >> 2] = Math_fround(1.29999995);
     HEAPF32[i8 + 544 >> 2] = Math_fround(1.29999995);
     HEAPF32[i8 + 548 >> 2] = Math_fround(1.29999995);
     HEAP32[i8 + 552 >> 2] = 0;
     HEAPF32[i8 + 560 >> 2] = Math_fround(1.0);
     HEAPF32[i8 + 564 >> 2] = Math_fround(0.0);
     HEAPF32[i8 + 568 >> 2] = Math_fround(0.0);
     HEAPF32[i8 + 572 >> 2] = Math_fround(0.0);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 4095](i12);
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 4095](i12, 1122877) | 0) {
      HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
      HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
      __ZN5physx2Sn17readAllPropertiesINS_23PxVehicleDriveSimData4WEEEvNS_23PxRepXInstantiationArgsERNS_9XmlReaderEPT_RNS_18XmlMemoryAllocatorERNS_12PxCollectionE(i7, i12, i8, i10, i15);
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 4095](i12);
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] & 4095](i12);
     if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 4095](i12, 1120807) | 0) {
      HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
      HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
      __ZN5physx2Sn17readAllPropertiesINS_23PxVehicleDriveSimData4WEEEvNS_23PxRepXInstantiationArgsERNS_9XmlReaderEPT_RNS_18XmlMemoryAllocatorERNS_12PxCollectionE(i7, i12, i8, i10, i15);
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 48 >> 2] & 4095](i12);
     i3 = HEAP32[i11 >> 2] | 0;
     i4 = (HEAP16[i4 + 4 >> 1] | 0) == 5 ? i4 : 0;
     i6 = __ZN5physx18PxVehicleDriveTank8allocateEj(i5) | 0;
     __ZN5physx18PxVehicleDriveTank5setupEPNS_9PxPhysicsEPNS_14PxRigidDynamicERKNS_22PxVehicleWheelsSimDataERKNS_21PxVehicleDriveSimDataEj(i6, i3, (HEAP16[i4 + 4 >> 1] | 0) == 5 ? i4 : 0, i9, i8, i5 - i1 | 0);
     HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i7 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
     HEAP32[i7 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
     __ZN5physx2Sn17readAllPropertiesINS_18PxVehicleDriveTankEEEvNS_23PxRepXInstantiationArgsERNS_9XmlReaderEPT_RNS_18XmlMemoryAllocatorERNS_12PxCollectionE(i7, i12, i6, i10, i15);
     i4 = HEAP32[i6 + 72 >> 2] | 0;
     i5 = i9 + 36 | 0;
     i1 = HEAP32[i5 >> 2] | 0;
     if (i1) {
      i3 = 0;
      do {
       i2 = HEAP32[(HEAP32[i4 + (i3 * 224 | 0) + 208 >> 2] | 0) + 352 >> 2] | 0;
       if (i2) {
        FUNCTION_TABLE_viiii[HEAP32[HEAP32[i15 >> 2] >> 2] & 2047](i15, i2, 0, 0);
        i1 = HEAP32[i5 >> 2] | 0;
       }
       i3 = i3 + 1 | 0;
      } while (i3 >>> 0 < i1 >>> 0);
     }
     __ZN5physx22PxVehicleWheelsSimData4freeEv(i9);
     HEAP32[i14 >> 2] = 1120938;
     HEAP32[i14 + 4 >> 2] = i6;
     i15 = i14 + 8 | 0;
     HEAP32[i15 >> 2] = i6;
     HEAP32[i15 + 4 >> 2] = 0;
     STACKTOP = i13;
     return;
    }
   } while (0);
   HEAP32[i14 >> 2] = 1459135;
   HEAP32[i14 + 4 >> 2] = 0;
   i15 = i14 + 8 | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = 0;
   STACKTOP = i13;
   return;
  }
 } while (0);
 __ZN5physx2Sn11ReportErrorENS0_15PxRepXErrorCode4EnumEPKcS4_i(3, 1120585, 1120698, 98) | 0;
 HEAP32[i14 >> 2] = 1459135;
 HEAP32[i14 + 4 >> 2] = 0;
 i15 = i14 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 STACKTOP = i13;
 return;
}

function __ZN9ShaderLab9SubShader20IsSubShaderSupportedEPKNS_13PropertySheetERb(i20, i13, i12) {
 i20 = i20 | 0;
 i13 = i13 | 0;
 i12 = i12 | 0;
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i21 = 0, i22 = 0, i23 = 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abort();
 i21 = i23 + 40 | 0;
 i22 = i23 + 32 | 0;
 i19 = i23 + 24 | 0;
 i18 = i23 + 16 | 0;
 i15 = i23 + 8 | 0;
 i14 = i23;
 i17 = i20 + 12 | 0;
 L1 : do if (HEAP32[i17 >> 2] | 0) {
  i10 = i20 + 20 | 0;
  i1 = 0;
  i11 = HEAP32[i20 >> 2] | 0;
  i4 = 0;
  L3 : while (1) {
   i8 = i11;
   i11 = i11 + 4 | 0;
   i7 = i11;
   L5 : while (1) {
    while (1) {
     while (1) {
      i2 = HEAP32[i8 >> 2] | 0;
      __ZN9ShaderLab4Pass16SetupPassOptionsEv(i2);
      i9 = i2 + 684 | 0;
      i5 = HEAP32[i9 >> 2] | 0;
      if (!i5) i3 = 0; else {
       i3 = i9;
       L12 : do {
        while (1) {
         if ((HEAP32[i5 + 16 >> 2] | 0) >= 0) {
          i3 = i5;
          break;
         }
         i5 = HEAP32[i5 + 4 >> 2] | 0;
         if (!i5) break L12;
        }
        i5 = HEAP32[i3 >> 2] | 0;
       } while ((i5 | 0) != 0);
       if ((i3 | 0) == (i9 | 0)) i3 = 0; else if ((HEAP32[i3 + 16 >> 2] | 0) < 1) i3 = ((HEAP32[i3 + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2; else i3 = 0;
      }
      if (__ZN9ShaderLab4Pass15IsPassSupportedEPKNS_13PropertySheetE(i2, i13) | 0) {
       i2 = i3;
       i16 = 15;
       break L5;
      }
      i5 = HEAP32[i9 >> 2] | 0;
      if (!i5) break; else {
       i3 = i9;
       i6 = i5;
      }
      L23 : do {
       while (1) {
        if ((HEAP32[i6 + 16 >> 2] | 0) >= 0) {
         i3 = i6;
         break;
        }
        i6 = HEAP32[i6 + 4 >> 2] | 0;
        if (!i6) break L23;
       }
       i6 = HEAP32[i3 >> 2] | 0;
      } while ((i6 | 0) != 0);
      if ((i3 | 0) == (i9 | 0)) {
       i3 = i9;
       i6 = i5;
      } else if ((HEAP32[i3 + 16 >> 2] | 0) < 1) if (((HEAP32[i3 + 20 >> 2] | 0) + -1 | 0) >>> 0 < 2) {
       i16 = 25;
       break L5;
      } else {
       i3 = i9;
       i6 = i5;
      } else {
       i3 = i9;
       i6 = i5;
      }
      L33 : do {
       while (1) {
        if ((HEAP32[i6 + 16 >> 2] | 0) >= 0) {
         i3 = i6;
         break;
        }
        i6 = HEAP32[i6 + 4 >> 2] | 0;
        if (!i6) break L33;
       }
       i6 = HEAP32[i3 >> 2] | 0;
      } while ((i6 | 0) != 0);
      if ((i3 | 0) == (i9 | 0)) {
       i16 = 33;
       break;
      }
      if ((HEAP32[i3 + 16 >> 2] | 0) >= 1) {
       i16 = 33;
       break;
      }
      if ((HEAP32[i3 + 20 >> 2] | 0) != 5) {
       i16 = 33;
       break;
      }
      __ZN9ShaderLab4Pass7ReleaseEv(i2);
      _memmove(i8 | 0, i11 | 0, (HEAP32[i20 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) - i7 | 0) | 0;
      i3 = (HEAP32[i17 >> 2] | 0) + -1 | 0;
      HEAP32[i17 >> 2] = i3;
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + -1;
      i2 = HEAP32[i20 >> 2] | 0;
      if ((i8 | 0) == (i2 + (i3 << 2) | 0)) {
       i16 = 49;
       break L3;
      }
     }
     if ((i16 | 0) == 33) {
      i16 = 0;
      i3 = i9;
      L45 : do {
       while (1) {
        if ((HEAP32[i5 + 16 >> 2] | 0) >= 0) {
         i3 = i5;
         break;
        }
        i5 = HEAP32[i5 + 4 >> 2] | 0;
        if (!i5) break L45;
       }
       i5 = HEAP32[i3 >> 2] | 0;
      } while ((i5 | 0) != 0);
      if ((i3 | 0) != (i9 | 0)) if ((HEAP32[i3 + 16 >> 2] | 0) <= 0) if (((HEAP32[i3 + 20 >> 2] | 0) + -3 | 0) >>> 0 > 2) break;
     }
     if (HEAP8[204348] | 0) {
      i1 = 0;
      i16 = 71;
      break L3;
     }
     _printf_console(1246574, i14);
     i1 = i2 + 640 | 0;
     if (!(HEAP8[i1 >> 0] & 1)) i1 = i1 + 1 | 0; else i1 = HEAP32[i2 + 648 >> 2] | 0;
     HEAP32[i15 >> 2] = (HEAP8[220740] & 1) == 0 ? 220741 : HEAP32[55187] | 0;
     HEAP32[i15 + 4 >> 2] = i1;
     _printf_console(1246591, i15);
     __ZN9ShaderLab4Pass7ReleaseEv(i2);
     _memmove(i8 | 0, i11 | 0, (HEAP32[i20 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) - i7 | 0) | 0;
     i3 = (HEAP32[i17 >> 2] | 0) + -1 | 0;
     HEAP32[i17 >> 2] = i3;
     HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + -1;
     i2 = HEAP32[i20 >> 2] | 0;
     if ((i8 | 0) == (i2 + (i3 << 2) | 0)) {
      i1 = 1;
      i16 = 49;
      break L3;
     } else i1 = 1;
    }
    i4 = 1 << HEAP32[220936 + (HEAP32[i2 + 596 >> 2] << 2) >> 2] | i4;
    __ZN9ShaderLab4Pass7ReleaseEv(i2);
    _memmove(i8 | 0, i11 | 0, (HEAP32[i20 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) - i7 | 0) | 0;
    i3 = (HEAP32[i17 >> 2] | 0) + -1 | 0;
    HEAP32[i17 >> 2] = i3;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + -1;
    i5 = HEAP32[i20 >> 2] | 0;
    if ((i8 | 0) == (i5 + (i3 << 2) | 0)) {
     i16 = 50;
     break L3;
    }
   }
   if ((i16 | 0) == 15) {
    i16 = 0;
    i2 = (HEAPU8[i12 >> 0] | i2 & 1) & 255;
   } else if ((i16 | 0) == 25) {
    i16 = 0;
    if (HEAP8[i12 >> 0] | 0) {
     i1 = 0;
     i16 = 71;
     break;
    }
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + -1;
    i2 = 1;
   }
   HEAP8[i12 >> 0] = i2;
   i2 = HEAP32[i20 >> 2] | 0;
   i3 = HEAP32[i17 >> 2] | 0;
   if ((i11 | 0) == (i2 + (i3 << 2) | 0)) {
    i16 = 49;
    break;
   }
  }
  if ((i16 | 0) == 49) {
   if (i4) {
    i5 = i2;
    i16 = 50;
   }
  } else if ((i16 | 0) == 71) {
   STACKTOP = i23;
   return i1 | 0;
  }
  L70 : do if ((i16 | 0) == 50) {
   if (!i3) break L1;
   i9 = i20 + 20 | 0;
   i2 = i5;
   i8 = i5;
   do {
    i7 = i8;
    i8 = i8 + 4 | 0;
    i6 = i8;
    while (1) {
     i5 = HEAP32[i7 >> 2] | 0;
     if (!(1 << HEAP32[220936 + (HEAP32[i5 + 596 >> 2] << 2) >> 2] & i4)) break;
     __ZN9ShaderLab4Pass7ReleaseEv(i5);
     _memmove(i7 | 0, i8 | 0, (HEAP32[i20 >> 2] | 0) + (HEAP32[i17 >> 2] << 2) - i6 | 0) | 0;
     i3 = (HEAP32[i17 >> 2] | 0) + -1 | 0;
     HEAP32[i17 >> 2] = i3;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + -1;
     i2 = HEAP32[i20 >> 2] | 0;
     if ((i7 | 0) == (i2 + (i3 << 2) | 0)) break L70;
    }
   } while ((i8 | 0) != (i2 + (i3 << 2) | 0));
  } while (0);
  if (i3) {
   if (!i1) {
    i22 = 1;
    STACKTOP = i23;
    return i22 | 0;
   }
   i5 = i2 + (i3 << 2) | 0;
   i4 = i2;
   while (1) {
    i3 = (HEAP32[i4 >> 2] | 0) + 684 | 0;
    i2 = HEAP32[i3 >> 2] | 0;
    if (!i2) {
     i16 = 69;
     break;
    } else i1 = i3;
    L86 : do {
     while (1) {
      if ((HEAP32[i2 + 16 >> 2] | 0) >= 0) {
       i1 = i2;
       break;
      }
      i2 = HEAP32[i2 + 4 >> 2] | 0;
      if (!i2) break L86;
     }
     i2 = HEAP32[i1 >> 2] | 0;
    } while ((i2 | 0) != 0);
    if ((i1 | 0) == (i3 | 0)) {
     i16 = 69;
     break;
    }
    if ((HEAP32[i1 + 16 >> 2] | 0) >= 1) {
     i16 = 69;
     break;
    }
    i4 = i4 + 4 | 0;
    if (((HEAP32[i1 + 20 >> 2] | 0) + -1 | 0) >>> 0 >= 2) {
     i16 = 69;
     break;
    }
    if ((i4 | 0) == (i5 | 0)) {
     i16 = 70;
     break;
    }
   }
   if ((i16 | 0) == 69) {
    _printf_console(1246574, i22);
    HEAP32[i21 >> 2] = (HEAP8[220740] & 1) == 0 ? 220741 : HEAP32[55187] | 0;
    _printf_console(1246671, i21);
    i22 = 0;
    STACKTOP = i23;
    return i22 | 0;
   } else if ((i16 | 0) == 70) {
    HEAP8[i20 + 46 >> 0] = 1;
    i22 = 1;
    STACKTOP = i23;
    return i22 | 0;
   }
  }
 } while (0);
 _printf_console(1246574, i18);
 HEAP32[i19 >> 2] = (HEAP8[220740] & 1) == 0 ? 220741 : HEAP32[55187] | 0;
 _printf_console(1246631, i19);
 i22 = 0;
 STACKTOP = i23;
 return i22 | 0;
}

function __ZNSt3__127__insertion_sort_incompleteIRNS_6__lessI11CulledLightS2_EEPS2_EEbT0_S6_T_(i10, i9, i1) {
 i10 = i10 | 0;
 i9 = i9 | 0;
 i1 = i1 | 0;
 var i2 = 0, f3 = f0, i4 = 0, i5 = 0, i6 = 0, f7 = f0, i8 = 0, i11 = 0, i12 = 0, i13 = 0, f14 = f0;
 switch (i9 - i10 >> 3 | 0) {
 case 2:
  {
   if (!(Math_fround(HEAPF32[i9 + -4 >> 2]) > Math_fround(HEAPF32[i10 + 4 >> 2]))) {
    i8 = 1;
    return i8 | 0;
   }
   i8 = i9 + -8 | 0;
   i6 = i10;
   i5 = HEAP32[i6 >> 2] | 0;
   i6 = HEAP32[i6 + 4 >> 2] | 0;
   i9 = i8;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   i4 = i10;
   HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i4 + 4 >> 2] = i2;
   HEAP32[i8 >> 2] = i5;
   HEAP32[i8 + 4 >> 2] = i6;
   i8 = 1;
   return i8 | 0;
  }
 case 3:
  {
   i6 = i10 + 8 | 0;
   i8 = i9 + -8 | 0;
   i1 = i10 + 12 | 0;
   f7 = Math_fround(HEAPF32[i1 >> 2]);
   i2 = i10 + 4 | 0;
   i11 = f7 > Math_fround(HEAPF32[i2 >> 2]);
   i4 = i9 + -4 | 0;
   i5 = Math_fround(HEAPF32[i4 >> 2]) > f7;
   if (!i11) {
    if (!i5) {
     i11 = 1;
     return i11 | 0;
    }
    i5 = i6;
    i4 = HEAP32[i5 >> 2] | 0;
    i5 = HEAP32[i5 + 4 >> 2] | 0;
    i12 = i8;
    i9 = HEAP32[i12 + 4 >> 2] | 0;
    i11 = i6;
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i11 + 4 >> 2] = i9;
    i11 = i8;
    HEAP32[i11 >> 2] = i4;
    HEAP32[i11 + 4 >> 2] = i5;
    f7 = Math_fround(HEAPF32[i1 >> 2]);
    if (!(f7 > Math_fround(HEAPF32[i2 >> 2]))) {
     i12 = 1;
     return i12 | 0;
    }
    i11 = i10;
    i8 = HEAP32[i11 >> 2] | 0;
    i11 = HEAP32[i11 + 4 >> 2] | 0;
    i4 = i6;
    i5 = HEAP32[i4 + 4 >> 2] | 0;
    i12 = i10;
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i12 + 4 >> 2] = i5;
    i12 = i6;
    HEAP32[i12 >> 2] = i8;
    HEAP32[i12 + 4 >> 2] = i11;
    i12 = 1;
    return i12 | 0;
   }
   i2 = i10;
   i1 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   if (i5) {
    i6 = i8;
    i11 = HEAP32[i6 + 4 >> 2] | 0;
    i12 = i10;
    HEAP32[i12 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    i12 = i8;
    HEAP32[i12 >> 2] = i1;
    HEAP32[i12 + 4 >> 2] = i2;
    i12 = 1;
    return i12 | 0;
   }
   i5 = i6;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = i10;
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i12 + 4 >> 2] = i11;
   i12 = i6;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i12 + 4 >> 2] = i2;
   if (!(Math_fround(HEAPF32[i4 >> 2]) > (HEAP32[tempDoublePtr >> 2] = i2, Math_fround(HEAPF32[tempDoublePtr >> 2])))) {
    i12 = 1;
    return i12 | 0;
   }
   i5 = i8;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = i6;
   HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i12 + 4 >> 2] = i11;
   i12 = i8;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i12 + 4 >> 2] = i2;
   i12 = 1;
   return i12 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRNS_6__lessI11CulledLightS2_EEPS2_EEjT0_S6_S6_S6_T_(i10, i10 + 8 | 0, i10 + 16 | 0, i9 + -8 | 0, i1) | 0;
   i12 = 1;
   return i12 | 0;
  }
 case 5:
  {
   i5 = i10 + 8 | 0;
   i6 = i10 + 16 | 0;
   i4 = i10 + 24 | 0;
   __ZNSt3__17__sort4IRNS_6__lessI11CulledLightS2_EEPS2_EEjT0_S6_S6_S6_T_(i10, i5, i6, i4, i1) | 0;
   i1 = i10 + 28 | 0;
   if (!(Math_fround(HEAPF32[i9 + -4 >> 2]) > Math_fround(HEAPF32[i1 >> 2]))) {
    i12 = 1;
    return i12 | 0;
   }
   i12 = i9 + -8 | 0;
   i11 = i4;
   i8 = HEAP32[i11 >> 2] | 0;
   i11 = HEAP32[i11 + 4 >> 2] | 0;
   i13 = i12;
   i9 = HEAP32[i13 + 4 >> 2] | 0;
   i2 = i4;
   HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i2 + 4 >> 2] = i9;
   HEAP32[i12 >> 2] = i8;
   HEAP32[i12 + 4 >> 2] = i11;
   if (!(Math_fround(HEAPF32[i1 >> 2]) > Math_fround(HEAPF32[i10 + 20 >> 2]))) {
    i13 = 1;
    return i13 | 0;
   }
   i12 = i6;
   i11 = HEAP32[i12 >> 2] | 0;
   i12 = HEAP32[i12 + 4 >> 2] | 0;
   i2 = i4;
   i1 = HEAP32[i2 >> 2] | 0;
   i2 = HEAP32[i2 + 4 >> 2] | 0;
   i13 = i6;
   HEAP32[i13 >> 2] = i1;
   HEAP32[i13 + 4 >> 2] = i2;
   i13 = i4;
   HEAP32[i13 >> 2] = i11;
   HEAP32[i13 + 4 >> 2] = i12;
   f3 = (HEAP32[tempDoublePtr >> 2] = i2, Math_fround(HEAPF32[tempDoublePtr >> 2]));
   if (!(f3 > Math_fround(HEAPF32[i10 + 12 >> 2]))) {
    i13 = 1;
    return i13 | 0;
   }
   i12 = i5;
   i11 = HEAP32[i12 >> 2] | 0;
   i12 = HEAP32[i12 + 4 >> 2] | 0;
   i13 = i5;
   HEAP32[i13 >> 2] = i1;
   HEAP32[i13 + 4 >> 2] = i2;
   i13 = i6;
   HEAP32[i13 >> 2] = i11;
   HEAP32[i13 + 4 >> 2] = i12;
   if (!(f3 > Math_fround(HEAPF32[i10 + 4 >> 2]))) {
    i13 = 1;
    return i13 | 0;
   }
   i12 = i10;
   i11 = HEAP32[i12 >> 2] | 0;
   i12 = HEAP32[i12 + 4 >> 2] | 0;
   i13 = i10;
   HEAP32[i13 >> 2] = i1;
   HEAP32[i13 + 4 >> 2] = i2;
   i13 = i5;
   HEAP32[i13 >> 2] = i11;
   HEAP32[i13 + 4 >> 2] = i12;
   i13 = 1;
   return i13 | 0;
  }
 case 1:
 case 0:
  {
   i13 = 1;
   return i13 | 0;
  }
 default:
  {
   i4 = i10 + 16 | 0;
   i6 = i10 + 8 | 0;
   f14 = Math_fround(HEAPF32[i10 + 12 >> 2]);
   f3 = Math_fround(HEAPF32[i10 + 4 >> 2]);
   f7 = Math_fround(HEAPF32[i10 + 20 >> 2]);
   i5 = f7 > f14;
   do if (f14 > f3) {
    i2 = i10;
    i1 = HEAP32[i2 >> 2] | 0;
    i2 = HEAP32[i2 + 4 >> 2] | 0;
    if (i5) {
     i11 = i4;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i10;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i12;
     i13 = i4;
     HEAP32[i13 >> 2] = i1;
     HEAP32[i13 + 4 >> 2] = i2;
     break;
    }
    i11 = i6;
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    i13 = i10;
    HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i13 + 4 >> 2] = i12;
    i13 = i6;
    HEAP32[i13 >> 2] = i1;
    HEAP32[i13 + 4 >> 2] = i2;
    if (f7 > (HEAP32[tempDoublePtr >> 2] = i2, Math_fround(HEAPF32[tempDoublePtr >> 2]))) {
     i11 = i4;
     i12 = HEAP32[i11 + 4 >> 2] | 0;
     i13 = i6;
     HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
     HEAP32[i13 + 4 >> 2] = i12;
     i13 = i4;
     HEAP32[i13 >> 2] = i1;
     HEAP32[i13 + 4 >> 2] = i2;
    }
   } else if (i5) {
    i12 = i6;
    i11 = HEAP32[i12 >> 2] | 0;
    i12 = HEAP32[i12 + 4 >> 2] | 0;
    i2 = i4;
    i1 = HEAP32[i2 >> 2] | 0;
    i2 = HEAP32[i2 + 4 >> 2] | 0;
    i13 = i6;
    HEAP32[i13 >> 2] = i1;
    HEAP32[i13 + 4 >> 2] = i2;
    i13 = i4;
    HEAP32[i13 >> 2] = i11;
    HEAP32[i13 + 4 >> 2] = i12;
    if ((HEAP32[tempDoublePtr >> 2] = i2, Math_fround(HEAPF32[tempDoublePtr >> 2])) > f3) {
     i12 = i10;
     i11 = HEAP32[i12 >> 2] | 0;
     i12 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i10;
     HEAP32[i13 >> 2] = i1;
     HEAP32[i13 + 4 >> 2] = i2;
     i13 = i6;
     HEAP32[i13 >> 2] = i11;
     HEAP32[i13 + 4 >> 2] = i12;
    }
   } while (0);
   i1 = i10 + 24 | 0;
   if ((i1 | 0) == (i9 | 0)) {
    i13 = 1;
    return i13 | 0;
   } else i2 = 0;
   while (1) {
    f3 = Math_fround(HEAPF32[i1 + 4 >> 2]);
    if (f3 > Math_fround(HEAPF32[i4 + 4 >> 2])) {
     i6 = HEAP32[i1 >> 2] | 0;
     i5 = i1;
     while (1) {
      i11 = i4;
      i12 = HEAP32[i11 + 4 >> 2] | 0;
      i13 = i5;
      HEAP32[i13 >> 2] = HEAP32[i11 >> 2];
      HEAP32[i13 + 4 >> 2] = i12;
      if ((i4 | 0) == (i10 | 0)) {
       i4 = i10;
       break;
      }
      if (f3 > Math_fround(HEAPF32[i4 + -4 >> 2])) {
       i5 = i4;
       i4 = i4 + -8 | 0;
      } else break;
     }
     HEAP32[i4 >> 2] = i6;
     HEAPF32[i4 + 4 >> 2] = f3;
     i2 = i2 + 1 | 0;
     if ((i2 | 0) == 8) break;
    }
    i4 = i1 + 8 | 0;
    if ((i4 | 0) == (i9 | 0)) {
     i1 = 1;
     i8 = 34;
     break;
    } else {
     i13 = i1;
     i1 = i4;
     i4 = i13;
    }
   }
   if ((i8 | 0) == 34) return i1 | 0;
   i13 = (i1 + 8 | 0) == (i9 | 0);
   return i13 | 0;
  }
 }
 return 0;
}

function __ZNK5physx11PxsCCDShape10getAbsPoseEPKNS_12PxsRigidBodyE(i1, i3, i2) {
 i1 = i1 | 0;
 i3 = i3 | 0;
 i2 = i2 | 0;
 var f4 = f0, f5 = f0, f6 = f0, f7 = f0, f8 = f0, f9 = f0, f10 = f0, f11 = f0, f12 = f0, f13 = f0, f14 = f0, f15 = f0, f16 = f0, f17 = f0, f18 = f0;
 if (!i2) {
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  i3 = HEAP32[i3 >> 2] | 0;
  f14 = Math_fround(Math_fround(HEAPF32[i3 + 16 >> 2]) * Math_fround(2.0));
  f12 = Math_fround(Math_fround(HEAPF32[i3 + 20 >> 2]) * Math_fround(2.0));
  f7 = Math_fround(Math_fround(HEAPF32[i3 + 24 >> 2]) * Math_fround(2.0));
  f17 = Math_fround(HEAPF32[i2 + 12 >> 2]);
  f16 = Math_fround(Math_fround(f17 * f17) + Math_fround(-.5));
  f15 = Math_fround(HEAPF32[i2 >> 2]);
  f4 = Math_fround(f14 * f15);
  f13 = Math_fround(HEAPF32[i2 + 4 >> 2]);
  f4 = Math_fround(f4 + Math_fround(f12 * f13));
  f11 = Math_fround(HEAPF32[i2 + 8 >> 2]);
  f4 = Math_fround(f4 + Math_fround(f7 * f11));
  f6 = Math_fround(Math_fround(f15 * f4) + Math_fround(Math_fround(f14 * f16) + Math_fround(f17 * Math_fround(Math_fround(f7 * f13) - Math_fround(f12 * f11)))));
  f5 = Math_fround(Math_fround(f13 * f4) + Math_fround(Math_fround(f12 * f16) + Math_fround(f17 * Math_fround(Math_fround(f14 * f11) - Math_fround(f7 * f15)))));
  f4 = Math_fround(Math_fround(Math_fround(f7 * f16) + Math_fround(f17 * Math_fround(Math_fround(f12 * f15) - Math_fround(f14 * f13)))) + Math_fround(f11 * f4));
  f6 = Math_fround(Math_fround(HEAPF32[i2 + 16 >> 2]) + f6);
  f5 = Math_fround(Math_fround(HEAPF32[i2 + 20 >> 2]) + f5);
  f4 = Math_fround(Math_fround(HEAPF32[i2 + 24 >> 2]) + f4);
  f14 = Math_fround(HEAPF32[i3 >> 2]);
  f12 = Math_fround(f17 * f14);
  f16 = Math_fround(HEAPF32[i3 + 12 >> 2]);
  f12 = Math_fround(f12 + Math_fround(f15 * f16));
  f7 = Math_fround(HEAPF32[i3 + 8 >> 2]);
  f12 = Math_fround(f12 + Math_fround(f13 * f7));
  f10 = Math_fround(HEAPF32[i3 + 4 >> 2]);
  f9 = Math_fround(Math_fround(Math_fround(f11 * f14) + Math_fround(Math_fround(f13 * f16) + Math_fround(f17 * f10))) - Math_fround(f15 * f7));
  f8 = Math_fround(Math_fround(Math_fround(f15 * f10) + Math_fround(Math_fround(f11 * f16) + Math_fround(f17 * f7))) - Math_fround(f13 * f14));
  f7 = Math_fround(Math_fround(Math_fround(Math_fround(f17 * f16) - Math_fround(f15 * f14)) - Math_fround(f13 * f10)) - Math_fround(f11 * f7));
  HEAPF32[i1 >> 2] = Math_fround(f12 - Math_fround(f11 * f10));
  HEAPF32[i1 + 4 >> 2] = f9;
  HEAPF32[i1 + 8 >> 2] = f8;
  HEAPF32[i1 + 12 >> 2] = f7;
  HEAPF32[i1 + 16 >> 2] = f6;
  HEAPF32[i1 + 20 >> 2] = f5;
  i3 = i1 + 24 | 0;
  HEAPF32[i3 >> 2] = f4;
  return;
 } else {
  i2 = HEAP32[i2 + 64 >> 2] | 0;
  f17 = Math_fround(HEAPF32[i2 + 48 >> 2]);
  f4 = Math_fround(HEAPF32[i2 + 52 >> 2]);
  f17 = Math_fround(f17 * Math_fround(-2.0));
  f4 = Math_fround(f4 * Math_fround(-2.0));
  f15 = Math_fround(Math_fround(HEAPF32[i2 + 56 >> 2]) * Math_fround(-2.0));
  f13 = Math_fround(HEAPF32[i2 + 44 >> 2]);
  f6 = Math_fround(Math_fround(f13 * f13) + Math_fround(-.5));
  f10 = Math_fround(HEAPF32[i2 + 32 >> 2]);
  f9 = Math_fround(f17 * f10);
  f18 = Math_fround(HEAPF32[i2 + 36 >> 2]);
  f9 = Math_fround(f9 + Math_fround(f4 * f18));
  f11 = Math_fround(HEAPF32[i2 + 40 >> 2]);
  f9 = Math_fround(f9 + Math_fround(f15 * f11));
  f14 = Math_fround(-f10);
  f8 = Math_fround(-f18);
  f12 = Math_fround(-f11);
  f5 = Math_fround(Math_fround(Math_fround(f10 * f9) + Math_fround(Math_fround(f17 * f6) - Math_fround(f13 * Math_fround(Math_fround(f15 * f18) - Math_fround(f4 * f11))))) * Math_fround(2.0));
  f7 = Math_fround(Math_fround(Math_fround(f18 * f9) + Math_fround(Math_fround(f4 * f6) - Math_fround(f13 * Math_fround(Math_fround(f17 * f11) - Math_fround(f15 * f10))))) * Math_fround(2.0));
  f9 = Math_fround(Math_fround(Math_fround(Math_fround(f15 * f6) - Math_fround(f13 * Math_fround(Math_fround(f4 * f10) - Math_fround(f17 * f18)))) + Math_fround(f11 * f9)) * Math_fround(2.0));
  f11 = Math_fround(HEAPF32[i2 + 12 >> 2]);
  f18 = Math_fround(Math_fround(f11 * f11) + Math_fround(-.5));
  f17 = Math_fround(HEAPF32[i2 >> 2]);
  f10 = Math_fround(f17 * f5);
  f4 = Math_fround(HEAPF32[i2 + 4 >> 2]);
  f10 = Math_fround(f10 + Math_fround(f4 * f7));
  f6 = Math_fround(HEAPF32[i2 + 8 >> 2]);
  f10 = Math_fround(Math_fround(f6 * f9) + f10);
  f15 = Math_fround(Math_fround(f17 * f10) + Math_fround(Math_fround(f18 * f5) + Math_fround(f11 * Math_fround(Math_fround(f4 * f9) - Math_fround(f6 * f7)))));
  f16 = Math_fround(Math_fround(f4 * f10) + Math_fround(Math_fround(f18 * f7) + Math_fround(f11 * Math_fround(Math_fround(f6 * f5) - Math_fround(f17 * f9)))));
  f10 = Math_fround(Math_fround(Math_fround(f18 * f9) + Math_fround(f11 * Math_fround(Math_fround(f17 * f7) - Math_fround(f4 * f5)))) + Math_fround(f6 * f10));
  f15 = Math_fround(Math_fround(HEAPF32[i2 + 16 >> 2]) + f15);
  f16 = Math_fround(Math_fround(HEAPF32[i2 + 20 >> 2]) + f16);
  f10 = Math_fround(Math_fround(HEAPF32[i2 + 24 >> 2]) + f10);
  f5 = Math_fround(Math_fround(Math_fround(Math_fround(f11 * f14) + Math_fround(f13 * f17)) + Math_fround(f4 * f12)) - Math_fround(f6 * f8));
  f7 = Math_fround(Math_fround(Math_fround(f6 * f14) + Math_fround(Math_fround(f11 * f8) + Math_fround(f13 * f4))) - Math_fround(f17 * f12));
  f9 = Math_fround(Math_fround(Math_fround(f17 * f8) + Math_fround(Math_fround(f11 * f12) + Math_fround(f13 * f6))) - Math_fround(f4 * f14));
  f12 = Math_fround(Math_fround(Math_fround(Math_fround(f13 * f11) - Math_fround(f17 * f14)) - Math_fround(f4 * f8)) - Math_fround(f6 * f12));
  i3 = HEAP32[i3 >> 2] | 0;
  f6 = Math_fround(Math_fround(HEAPF32[i3 + 16 >> 2]) * Math_fround(2.0));
  f8 = Math_fround(Math_fround(HEAPF32[i3 + 20 >> 2]) * Math_fround(2.0));
  f4 = Math_fround(Math_fround(HEAPF32[i3 + 24 >> 2]) * Math_fround(2.0));
  f14 = Math_fround(Math_fround(f12 * f12) + Math_fround(-.5));
  f17 = Math_fround(Math_fround(Math_fround(f5 * f6) + Math_fround(f7 * f8)) + Math_fround(f9 * f4));
  f15 = Math_fround(f15 + Math_fround(Math_fround(f5 * f17) + Math_fround(Math_fround(f14 * f6) + Math_fround(f12 * Math_fround(Math_fround(f7 * f4) - Math_fround(f9 * f8))))));
  f16 = Math_fround(f16 + Math_fround(Math_fround(f7 * f17) + Math_fround(Math_fround(f14 * f8) + Math_fround(f12 * Math_fround(Math_fround(f9 * f6) - Math_fround(f5 * f4))))));
  f17 = Math_fround(f10 + Math_fround(Math_fround(Math_fround(f14 * f4) + Math_fround(f12 * Math_fround(Math_fround(f5 * f8) - Math_fround(f7 * f6)))) + Math_fround(f9 * f17)));
  f6 = Math_fround(HEAPF32[i3 >> 2]);
  f8 = Math_fround(f12 * f6);
  f4 = Math_fround(HEAPF32[i3 + 12 >> 2]);
  f8 = Math_fround(f8 + Math_fround(f5 * f4));
  f14 = Math_fround(HEAPF32[i3 + 8 >> 2]);
  f8 = Math_fround(f8 + Math_fround(f7 * f14));
  f10 = Math_fround(HEAPF32[i3 + 4 >> 2]);
  f11 = Math_fround(Math_fround(Math_fround(f9 * f6) + Math_fround(Math_fround(f7 * f4) + Math_fround(f12 * f10))) - Math_fround(f5 * f14));
  f13 = Math_fround(Math_fround(Math_fround(f5 * f10) + Math_fround(Math_fround(f9 * f4) + Math_fround(f12 * f14))) - Math_fround(f7 * f6));
  f14 = Math_fround(Math_fround(Math_fround(Math_fround(f12 * f4) - Math_fround(f5 * f6)) - Math_fround(f7 * f10)) - Math_fround(f9 * f14));
  HEAPF32[i1 >> 2] = Math_fround(f8 - Math_fround(f9 * f10));
  HEAPF32[i1 + 4 >> 2] = f11;
  HEAPF32[i1 + 8 >> 2] = f13;
  HEAPF32[i1 + 12 >> 2] = f14;
  HEAPF32[i1 + 16 >> 2] = f15;
  HEAPF32[i1 + 20 >> 2] = f16;
  i3 = i1 + 24 | 0;
  HEAPF32[i3 >> 2] = f17;
  return;
 }
}`
