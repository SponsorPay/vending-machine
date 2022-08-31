import NeDB from "nedb";

export interface VendingMachinePersistence {
  stub():void
  //TODO: which operations should we support ?
}

export class NeDBPersistence implements VendingMachinePersistence {

  stub(): void {
    //this code demonstrates initializing an NeDB model
    const dbExampleTable = new NeDB({
      filename: "example.db",
      autoload: true
    })
    //insertion:
    dbExampleTable.insert({k: "v"})
    dbExampleTable.insert({k: "z"})
    //querying:
    const request = dbExampleTable.find({k : "v"})
    request.exec((_, result) => console.log(result))
  }

}
