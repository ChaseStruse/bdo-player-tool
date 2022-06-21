using System.Runtime.CompilerServices;
using System.Collections.Generic;
using Microsoft.Win32.SafeHandles;
using System;
using System.Data;
using System.Data.Common;
using Google.Cloud.Firestore;
using bdo_player_tool.Models;
using Newtonsoft.Json;

namespace bdo_player_tool.Repositories
{
    public class FamilyMemberRepository
    {
        FirestoreDb db = FirestoreDb.Create("bdo-helper-365d3");
				const string COLLECTION = "FamilyMembers";

        public async Task<FamilyMember> GetById(string id){
            DocumentReference familyMemRef = db.Collection(COLLECTION).Document(id);
            DocumentSnapshot snapshot = await familyMemRef.GetSnapshotAsync();

            if(snapshot.Exists) {
                var familyMember = snapshot.ConvertTo<FamilyMember>();
                return familyMember;
            }
            else{
                return null;
            }
        }
    }
}
