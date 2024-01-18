---
date created: 2023-04-27 01:45
date updated: 2023-04-27 01:46
---

1. WRITTEN RESPONSES (Created Independently)
   Submit your responses to prompts 3a – 3d, which are described below. Your response to all prompts combined must not exceed 750 words (program code is not included in the word count). Collaboration is not allowed on the written responses.
   1. Provide a written response that does all three of the following:
      Approx. 150 words (for all subparts of 3a combined)
      1. Describes the overall purpose of the program.
         This is a simple website that displays 3d files accompanied with a background. It has a few preset models and background for you to explore, but also supports you uploading your own to view on the site. This was originally inspired as a way for me to display and share my 3D art in a way that is more interactive than simple images. This allows me to easily share and exhibit not only my pieces but any 3D model online. With continued development in the future, I may even develop it into a way to exhibit my art in AR.
      1. Describes what functionality of the program is demonstrated in the video.
         In the video, you can see that 3D model is being moved around, showing the different sides of the model, while having the environment around it effect the lighting on the model. Additionally, you can see the drag and drop feature of the program, allowing you to display your own 3D models and environments. The centerpoint of the program is to view the 3D and is reflected as the program has a minimal interface, showing only the model.
      2. Describes the input and output of the program demonstrated in the video.
         The mouse movement can be considered an input to this program, moving the model around to see the other sides of it. The output would be the display of the model on the screen of the program. Additionally, uploading your own 3D files and environments are inputs to the program, altering its purpose to output instead a view on the model you provided.
   2. Capture and paste two program code segments you developed during the administration of this task that contain a list (or other collection type) being used to manage complexity in your program.
      Approx. 200 words (for all subparts of 3b combined, exclusive of program code)
      1. The first program code segment must show how data have been stored in the list.
         ![[Pasted image 20230427020200.png]]
      2. The second program code segment must show the data in the same list being used, such as creating new data from the existing data or accessing multiple elements in the list, as part of fulfilling the program's purpose.
         ![[Pasted image 20230427020230.png]]
      3. Then, provide a written response that does all three of the following:
         Identifies the name of the list being used in this response.
         The lists backgroundExt, glExt, and dt are all examples of lists in this code segment.
      4. Describes what the data contained in the list represent in your program.
         backgroundExt and glExt both store possible file extensions for environment textures and 3D models respectively. dt is a list that stores all the datatransferred files from the drag n drop in that case that there are multiple files being dropped at once, it is created by converting the iterator of dataTransfer items into a list
      5. Explains how the selected list manages complexity in your program code by explaining why your program code could not be written, or how it would be written differently, if you did not use the list.
         Storing possible background and gltf extensions in lists allows me to easily add, change, or remove extensions in the future in case I add the functionality to parse different file types. For the dt list, it would be more difficult to search the list for matching criterion if it were not a list. If I did not use lists in this area of code, it would likely only be able to look for a single file extension, making it not very expandable. If dt could not be a list, then the program would only support uploading one file at a time, decreasing functionality. 
   3. Capture and paste two program code segments you developed during the administration of this task that contain a student-developed procedure that implements an algorithm used in your program and a call to that procedure.
      Approx. 200 words (for all subparts of 3c combined, exclusive of program code)
      1. The first program code segment must be a student-developed procedure that:
         - Defines the procedure's name and return type (if necessary)
         - Contains and uses one or more parameters that have an effect on the functionality of the procedure
         - Implements an algorithm that includes sequencing, selection and iteration
         ![[Pasted image 20230427021258.png]]
      2. The second program code segment must show where your student-developed procedure is being called in your program.
         ![[Pasted image 20230427021313.png]]
      3. Then, provide a written response that does both of the following:
         Describes in general what the identified procedure does and how it contributes to the overall functionality of the program.
         This function takes in a directory list and a resolve tree in order to decide which resolver will need to be used to reply to the http request coming into the server. For example, if you request 'examples/monke/view', the function would use the resolveTree - an abstract object of resolvers - in order to pick the resolver associated with the 'examples/monke/view' path, since it should display something different than when you decide to visit 'examples/giraffe/view'. This function allows me to spread the routing of a request path out to different functions depending on characteristics of the request path instead of needing one large function to resolve every request.
      4. Explains in detailed steps how the algorithm implemented in the identified procedure works. Your explanation must be detailed enough for someone else to recreate it.
         This function takes two arguments, a list of strings representing the directory of the request, and a resolve tree, a tuple containing a function, and a dictionary/object of path names mapping to either a function or a tuple of the same shape as this. First, if the list of directories is of length 0, return the function in the tuple and an empty array representing the remaining unresolved directories (none). Next, try and search for the name of the first section of the directory list in the dictionary portion of the tuple. If it does not exist, return the current function with the directory in a list of length 1. Then if the selected directory maps to a function in the dictionary, return this function with the remaining unresolved directories. If it is not a function, recursively call this function on the new tuple in the dictionary, with the remaining unresolved directories. This effectively iterates over each item in the directory list, as every time the function recurses, the zeroth element in the directory is utilized and removed for the next iteration.
   4. Provides a written response that does all three of the following:
      Approx. 200 words (for all subparts of 3d combined)
      1. Describes two calls to the procedure identified in written response 3c. Each call must pass a different argument(s) that causes a different segment of code in the algorithm to execute.
         1. First call:
            Called with [] and [main, {examples: ex}]
         2. Second call:
            Called with ["examples", "giraffe", "obj"] and [main, {examples: [ex, {monke: mon, giraffe: gir}]}]
      2. Describes what condition(s) is being tested by each call to the procedure.
         1. Condition(s) tested by first call:
            - dir.length == 0
         2. Condition(s) tested by second call:
            - typeof newDir == "function"
            - newDir == null (after recusing once)
      1. Identifies the result of each call.
         1. Result of the first call:
            It would return the function main - the function of the tuple, followed with an empty array as there are no unresolved directories
         2. Result of the second call:
            It would return the function gir, followed by the array ["obj"], since the "obj" portion of the directory list remains unresolved, while examples and giraffe do
