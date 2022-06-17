using System.Runtime.CompilerServices;
using System.Collections.Generic;
using Microsoft.Win32.SafeHandles;
using System;
using System.Data;
using System.Data.Common;
using Google.Cloud.Firestore;
using bdo_player_tool.Models;

namespace bdo_player_tool.Repositories
{
    public class FamilyMemberRepository
    {
        FirestoreDb db = FirestoreDb.Create("bdo-helper-365d3");

        public async Task<FamilyMember> getLevel(){
            DocumentReference familyMemRef = db.Collection("FamilyMembers").Document("HaZOAjSvHnrK4x1ZEFRP");
            DocumentSnapshot snapshot = await familyMemRef.GetSnapshotAsync();

            if(snapshot.Exists) {
                Dictionary<string, object> familyMemberDictionary = snapshot.ToDictionary();

                var level = familyMemberDictionary.Where(x => x.Key == "Level").FirstOrDefault().Value;
                var name = familyMemberDictionary.Where(x => x.Key == "Name").FirstOrDefault().Value.ToString();

                FamilyMember familyMember = new FamilyMember{
                    Level = Convert.ToInt32(level),
                    Name = name
                };
                return familyMember;
            }
            else{
                return null;
            }
        }
    }
}
