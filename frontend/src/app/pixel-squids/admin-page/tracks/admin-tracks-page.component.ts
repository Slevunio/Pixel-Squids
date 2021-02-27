import { Component, OnInit } from '@angular/core';
import { ITrack } from '../../../interfaces/ITrack';
import { TracksHttpService } from '../../../services/TracksHttpService';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { map, tap } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

interface IAdminTrack {
    position: number,
    model: ITrack
}

@Component({
    selector: 'admin-tracks-page-component',
    templateUrl: './admin-tracks-page.component.html',
    styleUrls: ['./admin-tracks-page.component.scss']
})
export class AdminTracksPageComponent implements OnInit {

public data!: MatTableDataSource<IAdminTrack>;
public displayedColumns = ['select', 'position', 'id', 'name', 'instrumentType', 'createdAt', 'lastUpdate'];
public selection = new SelectionModel<IAdminTrack>(true, []);

    constructor(private tracksHttpService: TracksHttpService) { }

    public ngOnInit() {
        this.tracksHttpService.getAllTracks().pipe(
            map((tracks: ITrack[]) => tracks.map((track, index) => ({position: index + 1, model: track } as IAdminTrack))
        )).subscribe(adminTracks => {
            this.data = new MatTableDataSource<IAdminTrack>(adminTracks);
        });
    }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.data.data.length;
    return numSelected === numRows;
  }

  public toggleAll() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.data.data.forEach(row => this.selection.select(row));
  }

  public deleteTracks() {
      const ids = this.selection.selected.map(adminTrack => adminTrack.model.id!);
      this.tracksHttpService.deleteTracks(ids).subscribe(res => console.log(res));
  }


}