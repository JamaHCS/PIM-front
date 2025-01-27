import { Translation } from 'primeng/api';

export const Global = {
  /**
   * @property {object} patterns
   * Contains reusable regular expression patterns for validation purposes.
   */
  patterns: {
    /**
     * @property {RegExp} url
     * A regular expression pattern to validate URLs.
     *
     * - Matches valid HTTP(S) URLs.
     * - Supports domain names with subdomains.
     * - Allows optional ports.
     * - Permits optional query parameters and path segments.
     *
     * Example of valid URLs:
     * - `https://example.com`
     * - `http://sub.example.com:8080/path?query=123`
     * - `https://example.com/path/to/resource`
     */
    url: /^(https?):\/\/(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}(?::(?:0|[1-9]\d{0,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5]))?(?:\/(?:[-a-zA-Z0-9@%_+.~#?&=]+\/?)*)?$/,

    /**
     * @property {RegExp} specialCharacters
     * A regular expression pattern to validate strings containing alphanumeric characters
     * and a subset of special characters (`-`, `.`, `[`, `]`, `_`, space, `/`, `\`, `:`, `=`, `&`, `?`, `;`, `+`).
     *
     * - Matches strings that contain only allowed characters.
     *
     * Example of valid inputs:
     * - `example-123`
     * - `file.name[0]`
     * - `array[5]`
     * - `example_name`
     * - `example name`
     * - `path/to/resource`
     * - `file\path`
     * - `key:value`
     * - `param=value`
     * - `name&value`
     * - `search?query=test`
     * - `Endpoint=sb://example.servicebus.windows.net/;SharedAccessKeyName=KeyName;SharedAccessKey=Key+Value=`
     */
    specialCharacters: /^[a-zA-Z0-9\-\.\[\]_ /\\:=&?;+]+$/,

    /**
     * @property {RegExp} date
     * A regular expression pattern to validate ISO 8601 date strings.
     *
     * - Matches strings formatted as `YYYY-MM-DD` or `YYYY-MM-DDThh:mm:ss.sssZ`.
     *
     * Example of valid inputs:
     * - `2023-01-06`
     * - `2023-01-06T12:00:00Z`
     * - `2023-01-06T12:00:00+01:00`
     */
    date: /^\d{4}-\d{2}-\d{2}(T.*)?$/,
  },
  translations: {
    startsWith: 'Empieza con',
    contains: 'Contiene',
    notContains: 'No contiene',
    endsWith: 'Termina con',
    equals: 'Igual a',
    notEquals: 'No es igual a',
    noFilter: 'Sin filtro',
    lt: 'Menor que',
    lte: 'Menor o igual que',
    gt: 'Mayor que',
    gte: 'Mayor o igual que',
    is: 'Es',
    isNot: 'No es',
    before: 'Antes de',
    after: 'Después de',
    dateIs: 'Fecha es',
    dateIsNot: 'Fecha no es',
    dateBefore: 'Fecha antes de',
    dateAfter: 'Fecha después de',
    clear: 'Limpiar',
    apply: 'Aplicar',
    matchAll: 'Coincidir con todos',
    matchAny: 'Coincidir con alguno',
    addRule: 'Agregar regla',
    removeRule: 'Eliminar regla',
    accept: 'Aceptar',
    reject: 'Rechazar',
    choose: 'Elegir',
    upload: 'Subir',
    cancel: 'Cancelar',
    fileSizeTypes: ['B', 'KB', 'MB', 'GB'],
    dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    dateFormat: 'dd/mm/yy',
    firstDayOfWeek: 0,
    today: 'Hoy',
    weekHeader: 'Sem',
    weak: 'Débil',
    medium: 'Media',
    strong: 'Fuerte',
    passwordPrompt: 'Ingresa tu contraseña',
    emptyMessage: 'No hay información que mostrar',
    emptyFilterMessage: 'No se encontraron resultados',
    fileChosenMessage: 'Archivo seleccionado',
    noFileChosenMessage: 'No hay archivo seleccionado',
    pending: 'Pendiente',
    chooseYear: 'Elegir año',
    chooseMonth: 'Elegir mes',
    chooseDate: 'Elegir fecha',
    prevDecade: 'Década anterior',
    nextDecade: 'Siguiente década',
    prevYear: 'Año anterior',
    nextYear: 'Siguiente año',
    prevMonth: 'Mes anterior',
    nextMonth: 'Siguiente mes',
    prevHour: 'Hora anterior',
    nextHour: 'Siguiente hora',
    prevMinute: 'Minuto anterior',
    nextMinute: 'Siguiente minuto',
    prevSecond: 'Segundo anterior',
    nextSecond: 'Siguiente segundo',
    am: 'AM',
    pm: 'PM',
    searchMessage: 'Buscar...',
    selectionMessage: 'Seleccionados {0} de {1}',
    emptySelectionMessage: 'No hay elementos seleccionados',
    emptySearchMessage: 'No se encontraron coincidencias',
    aria: {
      trueLabel: 'verdadero',
      falseLabel: 'falso',
    },
  } as Translation,
};
