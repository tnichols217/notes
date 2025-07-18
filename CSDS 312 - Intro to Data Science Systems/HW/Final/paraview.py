#!/usr/bin/env python
import vtk

if __name__ == "__main__":
    print ("vtkGraph: Building a graph using Unstructured Grid, dump it in a vtk file, vertex.vtu, to be visualized using ParaView")
    
    # Create a user specified number of points 
    pointSource = vtk.vtkPointSource()
    pointSource.Update()

    # Create an integer array to store vertex id data and link it with its degree value as a scalar.
    degree  = vtk.vtkIntArray()
    degree.SetNumberOfComponents(1)
    degree.SetName("degree")
    degree.SetNumberOfTuples(8)
    degree.SetValue(0,2)
    degree.SetValue(1,1)
    degree.SetValue(2,3)
    degree.SetValue(3,3)
    degree.SetValue(4,4)
    degree.SetValue(5,2)
    degree.SetValue(6,1)
    degree.SetValue(7,1) # Make it have one connection
 
    pointSource.GetOutput().GetPointData().AddArray(degree)
    
    # Assaign co-ordinates for vertices. vtkPoints represents 3D points
    Points = vtk.vtkPoints()
    
    Points.InsertNextPoint(0,1,0)
    Points.InsertNextPoint(0,0,0)
    Points.InsertNextPoint(1,1,0)
    Points.InsertNextPoint(1,0,0)
    Points.InsertNextPoint(2,1,0)
    Points.InsertNextPoint(2,0,0)
    Points.InsertNextPoint(3,0,0)
    Points.InsertNextPoint(3,1,0) # Add vertex 7

    # Establish the specified edges using CellArray. It represents cell connectivity
    line = vtk.vtkCellArray()
    line.Allocate(9) # Increase number of edges
    line.InsertNextCell(2)
    line.InsertCellPoint(0)
    line.InsertCellPoint(1)
    line.InsertNextCell(2)
    line.InsertCellPoint(0)
    line.InsertCellPoint(2)
    line.InsertNextCell(2)
    line.InsertCellPoint(2)
    line.InsertCellPoint(3)
    line.InsertNextCell(2)
    line.InsertCellPoint(2)
    line.InsertCellPoint(4)
    line.InsertNextCell(2)
    line.InsertCellPoint(3)
    line.InsertCellPoint(4)
    line.InsertNextCell(2)
    line.InsertCellPoint(3)
    line.InsertCellPoint(5)
    line.InsertNextCell(2)
    line.InsertCellPoint(4)
    line.InsertCellPoint(5)
    line.InsertNextCell(2)
    line.InsertCellPoint(4)
    line.InsertCellPoint(6)
    line.InsertNextCell(2)
    line.InsertCellPoint(6)
    line.InsertCellPoint(7) # Add connection from vertex 6 to 7

    G = vtk.vtkUnstructuredGrid()
    G.GetPointData().SetScalars(degree)
    G.SetPoints(Points)
    G.SetCells(vtk.VTK_LINE, line)
    
    # Dump the graph in VTK unstructured format (.vtu)
    gw = vtk.vtkXMLUnstructuredGridWriter() 
    gw.SetFileName("vertex.vtu")
    gw.SetInputData(G)
    gw.Write()
    print ('---> ',)
    
    print ("Feed the vertex.vtu file in ParaView.")
