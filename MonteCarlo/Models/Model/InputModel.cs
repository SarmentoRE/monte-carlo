﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MonteCarlo.Models.Model
{
    public class InputModel
    {
        public Asset[] assetHolder { get; set;}
        public int numberOfAssets { get; set; }
    }
}
