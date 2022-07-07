using bdo_player_tool.Models;
using Google.Cloud.Firestore;

namespace bdo_player_tool.Repositories {

	public class FamilyRepository {
		
		FirestoreDb db = FirestoreDb.Create("bdo-helper-365d3");
		const string COLLECTION = "Family";

		public async Task<Family> GetFamilyAsync(string documentId) {
			DocumentReference familyRef = db.Collection(COLLECTION).Document(documentId);
			DocumentSnapshot snapshot = await familyRef.GetSnapshotAsync();

			if(snapshot.Exists) {
				var family = snapshot.ConvertTo<Family>();
				return family;
			}
			else{
				return null;
			}
		}

		public async Task<FamilyMember> GetFamilyMemberAsync(string familyName, string familyMemberId) {
			DocumentReference docRef = db.Collection(COLLECTION).Document(familyName).Collection("FamilyMembers").Document(familyMemberId);
			DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

			Console.WriteLine("GetFamilyMemberAsync has been hit");

			if(snapshot.Exists) {
				var familyMember = snapshot.ConvertTo<FamilyMember>();
				return familyMember;
			}
			else{
				return null;
			}
		}

		public async Task<string> AddFamilyMember(string familyName, FamilyMember familyMember){
			string id = Guid.NewGuid().ToString();
			
			Console.WriteLine("AddFamilyMember has been hit");

			await db.Collection(COLLECTION).Document(familyName).Collection("FamilyMembers").Document(id).SetAsync(familyMember);
			return id;
		}
	}

}
