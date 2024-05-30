let dom_seccion1 = document.querySelector(".section1")

dom_seccion1.innerHTML = `
<body>
<div class="seccion1">
    <h2>Bloque</h2>
    <table>
        <tr>
            <th>Etiqueta</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>&lt;div&gt;</td>
            <td>Define una sección de un documento.</td>
        </tr>
        <tr>
            <td>&lt;p&gt;</td>
            <td>Define un párrafo.</td>
        </tr>
        <tr>
            <td>&lt;h1&gt; a &lt;h6&gt;</td>
            <td>Define encabezados, de &lt;h1&gt; (más importante) a &lt;h6&gt; (menos importante).</td>
        </tr>
        <tr>
            <td>&lt;header&gt;</td>
            <td>Define la cabecera de un documento o una sección.</td>
        </tr>
        <tr>
            <td>&lt;footer&gt;</td>
            <td>Define el pie de página de un documento o una sección.</td>
        </tr>
        <tr>
            <td>&lt;section&gt;</td>
            <td>Define una sección genérica de un documento.</td>
        </tr>
        <tr>
            <td>&lt;article&gt;</td>
            <td>Define contenido independiente y auto-contenido.</td>
        </tr>
        <tr>
            <td>&lt;aside&gt;</td>
            <td>Define contenido aparte del contenido principal.</td>
        </tr>
        <tr>
            <td>&lt;nav&gt;</td>
            <td>Define un conjunto de enlaces de navegación.</td>
        </tr>
        <tr>
            <td>&lt;main&gt;</td>
            <td>Define el contenido principal del documento.</td>
        </tr>
    </table>
</div>
</body>
`;