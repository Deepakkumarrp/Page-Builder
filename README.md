# Mini Page Builder

Mini Page Builder is a React-based web application that allows users to build custom pages by dragging and dropping components from a sidebar onto a blank canvas. Users can configure the elements, move them around the page, update their properties, and automatically save changes to local storage.

## Features

1. **Drag and Drop**: Drag elements (Label, Input, Button) from the sidebar onto the blank page to build your layout.
2. **Element Configuration**: When dropping an element onto the page, a modal prompts the user to configure its properties, such as position (X and Y coordinates).
3. **Dynamic Rendering**: Saved changes are dynamically rendered on the page according to the user's configuration.
4. **Element Manipulation**: Users can drag elements on the page to change their positions.
5. **Element Selection**: Clicking on an element selects it, displaying a red border around the component.
6. **Edit Element Configuration**: Users can press Enter while an element is selected to update its configuration through a modal.
7. **Delete Element**: Users can press Delete while an element is selected to delete it from the page.
8. **Automatic Local Storage Saving**: All changes, including addition, update, and deletion of elements, are automatically saved to local storage.
9. **Export Functionality**: Users can export the current page configuration to a JSON file for easy sharing and backup purposes.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepakkumarrp/Page-Builder
   ```
   
2.  Navigate to the project directory:

    ```bash
    cd Page-Builder
    ```

3.  Install Dependencies:

    ```bash
    npm install
    ```
4. Run on the LocalHost

    ```bash
    npm run dev
    ```


### Usage
Drag elements from the sidebar onto the blank canvas to build your page layout.
Configure element properties (position, text, etc.) using the modal that appears after dropping an element.
Move elements around the page by dragging them.
Click on an element to select it. Press Enter to edit its configuration or press Delete to delete it.
All changes are automatically saved to local storage and persist across page reloads.
Use the export functionality to export the current page configuration to a JSON file.

### Technologies Used
React
React DnD (React Drag and Drop)
