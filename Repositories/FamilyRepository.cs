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

		public async Task<FamilyMember> GetFamilyMemberAsync(string familyId, string familyMemberId) {
			DocumentReference docRef = db.Collection(COLLECTION).Document(familyId).Collection("FamilyMembers").Document(familyMemberId);
			DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

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
