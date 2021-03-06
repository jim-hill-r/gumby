﻿using Gumby.Climb.Journal.Contract;
using Microsoft.AspNetCore.Components;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Gumby.App.Climb.Journal
{
    public static class JournalService
    {
        public static readonly string API_PATH = "https://gumbysl.azurewebsites.net/api";
        public static readonly string API_KEY = "QWWkaPYiPdD6jeBqATZboUBtWuU5b1j7OPW95WayuQtca6UJc2Z61g==";
        public static async Task<IEnumerable<JournalData>> GetManyJournal()
        {
            using (var client = new HttpClient())
            {
                var endpointPath = $"{API_PATH}/journal?code={API_KEY}";
                return await client.GetJsonAsync<IEnumerable<JournalData>>(endpointPath);
            }
        }
        public static async Task CreateJournal(JournalData journal)
        {
            using (var client = new HttpClient())
            {
                var endpointPath = $"{API_PATH}/journal?code={API_KEY}";
                await client.PostJsonAsync(endpointPath, journal);
            }
        }
    }
}
